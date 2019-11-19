const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  item_name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  description: {
    type: String,
    required: true
  },
  image_url: String
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;