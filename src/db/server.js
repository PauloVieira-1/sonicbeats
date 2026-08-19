import express from "express";
import { PRICES } from "../config/prices";
// import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const stripe = require("stripe")(process.env.REACT_APP_API_KEY);

/**
 * Total in cents, priced from the server's own catalogue.
 *
 * The request only says what and how many — any price it carries is ignored,
 * otherwise a browser could edit its cart in localStorage and set its own
 * total. Throws on anything it cannot price.
 */
function calculateAmount(items) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("Cart is empty");
  }

  let total = 0;

  items.forEach((item) => {
    const price = PRICES[item && item.name];
    if (price === undefined) {
      throw new Error(`Unknown product: ${item && item.name}`);
    }

    const count = Number(item.count);
    if (!Number.isInteger(count) || count < 1) {
      throw new Error(`Invalid quantity for ${item.name}`);
    }

    total += count * price * 100;
  });

  // Cents must be a whole number — 349.3 * 100 lands on 34930.000000000004.
  return Math.round(total);
}

const start = async () => {
  // const client = await MongoClient.connect("mongodb://localhost:27017");

  // const db = client.db("Sonicbeats");

  require("dotenv").config();
  const cors = require("cors");
  const app = express(); // calling express as a function to create a new server
  const port = process.env.PORT || 8081;

  app.use(cors());
  app.use(express.static("public"));
  app.use(express.json()); // When a request us made it will be sent to the .body method (.body will be undefined if not added)

  // app.get("/requests", async (req, res) => {
  //   const requests = await db.collection("ProductRequests").find().toArray();
  //   res.json(requests);
  // });

  // app.post("/requests", async (req, res) => {
  //   const newRequest = req.body; // (req.body contains the information sent from the client side)
  //   const request = { ...newRequest };
  //   const response = await db.collection("ProductRequests").insertOne(request);

  //   console.log(response);
  //   res.status(200).json(request);
  // });

  app.post("/create-payment-intent", async (req, res) => {
    const items = req.body;

    let amount;
    try {
      amount = calculateAmount(items);
    } catch (error) {
      console.error("Rejected cart:", error.message);
      return res.status(400).send({ error: error.message });
    }

    const itemNames = items
      .map((item) => `${item.name} (x${item.count})`)
      .join(", ");

    // Which version of the made-to-order terms the customer accepted, and when.
    // Kept on the payment so there is a record of the disclosure until orders
    // live in a database of their own.
    const termsVersion = req.get("X-SB-Acknowledgement") || "not recorded";
    const termsAcceptedAt = req.get("X-SB-Acknowledged-At") || "";

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "eur",
        automatic_payment_methods: { enabled: true },
        description: itemNames,
        metadata: {
          made_to_order_terms: termsVersion,
          terms_accepted_at: termsAcceptedAt,
        },
      });

      res.send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error("Stripe error:", error);
      res.status(500).send({ error: "Failed to create PaymentIntent" });
    }
  });

  // app.post("/confirm-payment", async (req, res) => {
  //   try {
  //     const { clientSecret } = req.body;

  //     if (!clientSecret) {
  //       return res.status(400).json({ error: "Missing clientSecret" });
  //     }

  //     const { error } = await stripe.confirmCardPayment(clientSecret);

  //     if (error) {
  //       console.error("Stripe error:", error);
  //       return res.status(500).json({ error: "Failed to confirm PaymentIntent" });
  //     }

  //     res.json({ success: true });

  //   } catch (error) {
  //     console.error("Server error:", error);
  //     res.status(500).json({ error: "Internal server error" });
  //   }

  // emailjs.sendForm("service_xedvn6r", "template_ib5kavn", req.body, "lefNpA0eeHK4rVGKZ").then((result) => {
  //   console.log(result.text);
  // }, (error) => {
  //   console.log(error.text);
  // })
  // })

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

start();
