import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { FaCheckCircle } from "react-icons/fa";

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      {loading ? (
        <PropagateLoader
          color="#36d7b7"
          size={20}
          className="mb-5 justify-center flex items-center"
        />
      ) : (
        <div className="text-center">
          <div className="flex justify-center items-center gap-2 py-2">
            <FaCheckCircle className="text-green-500 text-3xl " />
            <h2 className="text-3xl font-semibold ">Order Successful</h2>
          </div>
          <p className="text-xl font-bold">
            Your order has been placed successfully👌!
          </p>
        </div>
      )}
    </div>
  );
};

export default Success;
