const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
const dotenv = require("dotenv");
const authRoute = require("./Routes/auth");
const userRouter = require("./Routes/user");
const restaurantRouter = require("./Routes/restaurant");
const cors = require("cors");
dotenv.config();
mongoose
  .connect("mongodb+srv://Ayush1928:a1y2u3s4h5@cluster0.zu1tsmk.mongodb.net/Tecudia?retryWrites=true&w=majority")
  .then(() => {
    console.log("Database Connected Successfully.");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRouter);
app.use("/api/restaurant", restaurantRouter);
app.listen(port, () => {
  console.log(`Backend Server is running on port : ${port}`);
});