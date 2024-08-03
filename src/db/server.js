import express from "express";
import { MongoClient } from "mongodb";

const start = async () => {
  const client = await MongoClient.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db("Sonicbeats");

  require("dotenv").config();
  const cors = require("cors");
  const app = express(); // calling express as a function to create a new server
  const port = process.env.PORT || 8081;

  app.use(cors());
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

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

start();
