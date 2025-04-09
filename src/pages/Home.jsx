import React from "react";

import { CategoryMenu } from "../components/CategoryMenu";
import FoodItem from "../components/FoodItem";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItem />
      <Cart />
    </>
  );
};

export default Home;
