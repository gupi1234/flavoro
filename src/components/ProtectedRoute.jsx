import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const cardItem = useSelector((state) => state.cart.cart);
  return cardItem.length > 0 ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
