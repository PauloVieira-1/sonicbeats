require('dotenv').config();
const cors = require('cors');
const express = require('express'); // node.js import sytax
const app = express(); // calling express as a function to create a new server 
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json()); // When a request us made it will be sent to the .body method (.body will be undefined if not added)

let fakeItems = [{
      name: "john",
      email: "john@gmail.com",
      phone: "388294937438",
      spec: "X",
      material: "X",
      description: "wedbweiubuiwbuweiu",
},
  {
    name: "Jane",
    email: "Jane@gmail.com",
    phone: "29r8234979423789",
    spec: "Y",
    material: "Y",
    description: "idhiuehi2",
  },
  ];

app.get('/items', (req, res) => {
  res.json(fakeItems);
});

app.post('/items', (req, res) => {
  const newItem = req.body; // (req.body contains the information sent from the client side)
  const item = { id: fakeItems.length + 1, ...newItem };
  fakeItems.push(item); // sends to client side 
  res.status(200).json(item);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// const mongoose = require("mongoose");

// const dbConnectionString = process.env.MONGODB_URI;

// mongoose.connect(dbConnectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.on('connected', () => {
//     console.log('MongoDB database connection established successfully');
//   });
  
//   mongoose.connection.on('error', (err) => {
//     console.error('MongoDB database connection error:', err);
//   });
  
  
//   app.use(express.json());
  
  


