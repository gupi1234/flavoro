import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const ToggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const cardItems = useSelector((state) => state.cart.cart);
  const totalQty = cardItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalAmount = cardItems.reduce(
    (totalAmount, item) => totalAmount + item.price * item.qty,
    0
  );

  const Navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed top-0 right-0 w-full lg:w-[20vw] h-full bg-white shadow-lg p-5 flex flex-col justify-between z-50 
        ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        } transation-all duration-500`}
      >
        <div>
          <div className="flex justify-between items-center mb-5">
            <span className="text-xl font-bold text-gray-800">My Order</span>
            <IoMdClose
              className="border-2 border-gray-600 text-gray-600 cursor-pointer font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300"
              onClick={ToggleCart}
            />
          </div>

          {cardItems.length > 0 ? (
            cardItems.map((food) => {
              return (
                <ItemCard
                  key={food.id}
                  id={food.id}
                  name={food.name}
                  price={food.price}
                  img={food.img}
                  qty={food.qty}
                />
              );
            })
          ) : (
            <h2 className="text-center text-gray-500 font-semibold">
              Your card is Empty
            </h2>
          )}
        </div>

        <div className="w-full mt-5">
          <h3 className="font-semibold text-gray-800">Items: {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount: ₹{totalAmount}
          </h3>
          <hr className="my-3" />
          <button
            onClick={() => {
              Navigate("/success");
            }}
            className="bg-green-500 font-bold px-3 py-2 text-white rounded-lg w-full"
          >
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        className={` fixed bottom-4 right-4 rounded-full bg-white shadow-md  text-5xl cursor-pointer p-3  ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        }`}
        onClick={ToggleCart}
      />
    </>
  );
};

export default Cart;
