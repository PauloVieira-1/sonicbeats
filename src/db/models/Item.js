const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  spec: String,
  material: String,
  description: String,
});

module.exports = mongoose.model("Item", orderSchema);

export default orderSchema;