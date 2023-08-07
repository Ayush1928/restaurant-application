const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: Boolean, enum: ["Veg", "Non-Veg"], required: true },
    images: { type: String, required: true },
    price: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dish", dishSchema);