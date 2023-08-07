import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { publicRequest } from "../requestMethod";
import { useEffect, useState } from "react";

export default function RestaurantCard() {
  const [restaurants, setRestaurants] = useState({});

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const res = await publicRequest.get("/restaurant/");
        setRestaurants(res.data);
      } catch (err) {
        console.log("getRestaurant : ", err);
      }
    };
    getRestaurants();
  }, [setRestaurants]);
  return (
    <>
      {restaurants.map((restaurant) => (
        <Card className="restaurant-card" sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Restaurant"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Haldiram
            </Typography>
            <div className="restaurant-details">
              <Typography variant="body2" color="text.secondary">
                Fast Food
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Veg
              </Typography>
            </div>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quo
              porro labore error, expedita assumenda.
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
