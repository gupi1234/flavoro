import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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
          <h2 className="text-3xl font-semibold mb-4">Order Successful</h2>
          <p className="text-xl font-bold">
            Your Order has been placed successfully!
          </p>
        </div>
      )}
    </div>
  );
};

export default Success;
