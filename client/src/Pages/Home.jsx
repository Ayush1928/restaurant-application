import React from "react";
import Navbar from "../Components/Navbar";
import RestaurantCard from "../Components/RestaurantCard";

const Home = () => {

  return (
    <>
      <Navbar />
      <div className="homepage-container">
        <RestaurantCard />
      </div>
    </>
  );
};

export default Home;
