import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

export const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const ListUniqueCategories = () => {
    const unicueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(unicueCategories);
    console.log(unicueCategories);
  };

  useEffect(() => {
    ListUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const SelectedCategory = useSelector((state) => state.category.category);

  return (
    <div className=" mx-6 lg:mx-36 my-10 flex flex-col gap-5">
      <h3 className="text-xl font-semibold">Find the best foods</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
            SelectedCategory === "All" && "bg-green-500 text-white"
          }`}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
                SelectedCategory === category && "bg-green-500 text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};
