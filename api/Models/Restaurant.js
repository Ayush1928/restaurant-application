const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Dish = require("./Dish");

const restaurantSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    images: [{ type: String, required: true }],
    title: { type: String, required: true },
    cuisines: [{ type: String, required: true }],
    dishes: [{ type: Schema.Types.ObjectId, ref: "Dish" }],
    availability: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;