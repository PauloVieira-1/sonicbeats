import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const apikey =  process.env.REACT_APP_API_KEY

console.log(`API Key: ${apikey}`);

const stripe = require("stripe")(process.env.REACT_APP_API_KEY);

function calculateAmount(items) {
  let total = 0;
  items.forEach((item) => {
    total += item.count * item.price * 100;
  });
  return total; // reduce
}

const start = async () => {
  const client = await MongoClient.connect("mongodb://localhost:27017");

  const db = client.db("Sonicbeats");

  require("dotenv").config();
  const cors = require("cors");
  const app = express(); // calling express as a function to create a new server
  const port = process.env.PORT || 8081;

  app.use(cors());
  app.use(express.static("public"));
  app.use(express.json()); // When a request us made it will be sent to the .body method (.body will be undefined if not added)

  app.get("/requests", async (req, res) => {
    const requests = await db.collection("ProductRequests").find().toArray();
    res.json(requests);
  });

  app.post("/requests", async (req, res) => {
    const newRequest = req.body; // (req.body contains the information sent from the client side)
    const request = { ...newRequest };
    const response = await db.collection("ProductRequests").insertOne(request);

    console.log(response);
    res.status(200).json(request);
  });

  app.post("/create-payment-intent", async (req, res) => {
    const items = req.body; // { items:[]}

    // if (!Array.isArray(items) || items.length === 0) {
    //   return res.status(400).json({ error: "Invalid items" });
    // }

    const amount = calculateAmount(items) > 1 ? calculateAmount(items) : 1;
    const itemNames = items
      .map((item) => `${item.name} (x${item.count})`)
      .join(", ");

    // if (amount <= 0) {
    //   return res.status(400).send({ error: "Amount must be greater than 0" });
    // }

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "eur",
        automatic_payment_methods: { enabled: true },
        receipt_email: "dHs9X@example.com",
        description: itemNames,
      });

      res.send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error("Stripe error:", error);
      res.status(500).send({ error: "Failed to create PaymentIntent" });
    }
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

start();
