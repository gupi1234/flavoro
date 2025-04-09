import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CardSlice";
import toast from "react-hot-toast";

const ItemCard = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementQty({ id }));
  };
  const decrement = () => {
    qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0);
  };

  const handleDelete = () => {
    dispatch(removeFromCart({ id, img, name, price, qty }));
    toast(`${name} Removed!`, {
      icon: "👋",
    });
  };

  return (
    <>
      <div className=" flex gap-2 shadow-md rounded-lg p-2 mb-3">
        <MdDelete
          onClick={handleDelete}
          className=" absolute right-7 text-red-500 cursor-pointer hover:text-red-300"
        />
        <img src={img} alt="img" className="w-[50px] h-[50px]" />

        <div className="">
          <h2 className="font-bold text-gray-800">{name}</h2>
          <div className="flex justify-between ">
            <span className="text-green-500 font-bold">₹{price}</span>
            <div className="flex gap-2 justify-center absolute right-7 items-center">
              <FaMinus
                onClick={decrement}
                className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              />
              <span>{qty}</span>
              <FaPlus
                onClick={increment}
                className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
