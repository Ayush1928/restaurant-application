import React from "react";
import Navbar from "../Components/Navbar";
import SingleRestaurant from "../Components/SingleRestaurant";

const SingleRestaurantPage = () => {
  return (
    <>
      <Navbar />
      <div className="single-page-container">
        <SingleRestaurant/>
      </div>
    </>
  );
};

export default SingleRestaurantPage;
