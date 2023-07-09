import React from "react";
import { Link } from "react-router-dom";

const AnalyticalRDSolutions = () => {
  return (
    <section
      className="bg-blue-800 py-8 my-10 "
      style={{ marginBottom: 200, marginTop: -50 }}
    >
      <div className="container mx-auto flex flex-col items-center text-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center sm:text-left">
          Experience the Best-in-Class Analytical and R&D Solutions Today!
        </h2>
        <p className="text-lg mb-6 text-center sm:text-left">
          Dedicated to Supporting Your Business 24/7
        </p>
        <Link
          to="/contact"
          className="bg-blue-500 py-2 px-4 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
};

export default AnalyticalRDSolutions;
