const { verifyTokenandAuth, verifyTokenandAdmin } = require("./verifyToken");
const express = require("express");
const router = express.Router();
const CryptoJS = require("crypto-js");
const Restaurant = require("../Models/Restaurant");
const Dish = require("../Models/Dish");
//Add a restaurant
router.post("/", verifyTokenandAdmin, async (req, res) => {
  const newRestaurant = new Restaurant(req.body);
  try {
    const savedRestaurant = await newRestaurant.save();
    res.status(200).json(savedRestaurant);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete Restaurant
router.delete("/:id", verifyTokenandAdmin, async (req, res) => {
  try {
    await Restaurant.findByIdAndDelete(req.params.id);
    res.status(200).json("Restaurant has been deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get a Restaurant
router.get("/find/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    res.status(200).json(restaurant);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get all Restaurant
router.get("/", async (req, res) => {
  try {
    let restaurants;

    restaurants = await Restaurant.find();

    res.status(200).json(restaurants);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add a dish to a restaurant
router.post("/:restaurantId/dishes", verifyTokenandAdmin, async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.restaurantId);
    if (!restaurant) {
      return res.status(404).json("Restaurant not found");
    }

    const newDish = new Dish({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      images: req.body.images,
      price: req.body.price,
      ingredients: req.body.ingredients
    });
    restaurant.dishes.push(newDish);
    await restaurant.save();

    res.status(200).json(restaurant);
  } catch (err) {
    console.log("Error adding dishes : ",err)
    res.status(500).json(err);
  }
});

// Update a dish within a restaurant
router.put(
  "/:restaurantId/dishes/:dishId",
  verifyTokenandAdmin,
  async (req, res) => {
    try {
      const restaurant = await Restaurant.findById(req.params.restaurantId);
      if (!restaurant) {
        return res.status(404).json("Restaurant not found");
      }

      const dishIndex = restaurant.dishes.findIndex(
        (dish) => dish._id.toString() === req.params.dishId
      );

      if (dishIndex === -1) {
        return res.status(404).json("Dish not found");
      }

      restaurant.dishes[dishIndex].set(req.body);
      await restaurant.save();

      res.status(200).json(restaurant);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

// Delete a dish within a restaurant
router.delete(
  "/:restaurantId/dishes/:dishId",
  verifyTokenandAdmin,
  async (req, res) => {
    try {
      const restaurant = await Restaurant.findById(req.params.restaurantId);
      if (!restaurant) {
        return res.status(404).json("Restaurant not found");
      }

      const dishIndex = restaurant.dishes.findIndex(
        (dish) => dish._id.toString() === req.params.dishId
      );

      if (dishIndex === -1) {
        return res.status(404).json("Dish not found");
      }

      restaurant.dishes.splice(dishIndex, 1);
      await restaurant.save();

      res.status(200).json("Dish deleted successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

// Get all dishes of a restaurant
router.get("/:restaurantId/dishes", async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.restaurantId);
    if (!restaurant) {
      return res.status(404).json("Restaurant not found");
    }

    const dishes = restaurant.dishes;
    res.status(200).json(dishes);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;