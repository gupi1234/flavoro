import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/CardSlice";
import categorySlice from "./slices/CategorySlice";
import searchSlice from "./slices/SearchSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    category: categorySlice,
    search: searchSlice,
  },
});

export default store;
