const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  rating: {
    type: Number,
  },
  numReviews: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
