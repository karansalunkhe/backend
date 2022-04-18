const mongoose = require("mongoose");
const OrderSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Order", OrderSchema);
