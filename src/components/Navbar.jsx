import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const NavBar = () => {
  const date = new Date().toUTCString().slice(0, 16);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center py-4 px-6 mb-10 shadow-md bg-white">
      <div className="mb-2 lg:mb-0">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text tracking-wide">
          Flavoro
        </h1>
        <h3 className="text-md text-gray-500">{date}</h3>
      </div>
      <div className="w-full lg:w-[25vw]">
        <input
          type="search"
          name="search"
          placeholder="Search here..."
          autoComplete="off"
          className="w-full p-3 border border-gray-400 rounded-lg shadow-sm text-sm outline-none focus:ring-1 focus:ring-pink-400"
          onChange={handleSearch}
        />
      </div>
    </nav>
  );
};

export default NavBar;
