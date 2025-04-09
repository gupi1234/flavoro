import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CardSlice";

const FoodCard = ({ id, name, img, desc, price, rating, handleToast }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
    handleToast(name);
  };
  return (
    <div className="w-[250px] rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="overflow-hidden">
        <img
          src={img}
          alt="img"
          className="w-full h-[150px] object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h2 className="text-base font-semibold text-gray-800">{name}</h2>
          <span className="text-green-600 font-medium text-sm">₹{price}</span>
        </div>
        <p className="text-sm text-gray-500 leading-tight">
          {desc.slice(0, 50)}...
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="flex items-center text-sm text-yellow-500">
            <FaStar className="mr-1" /> {rating}
          </span>
          <button
            className="px-3 py-1.5 text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded-xl transition-colors duration-300"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
