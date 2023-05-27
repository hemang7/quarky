import React from "react";
import { Link } from "react-router-dom";

const AnalyticalRDSolutions = () => {
  return (
    <section className="bg-gray-900 py-8 my-10 mx-4" style={{marginBottom: 200, marginTop:-50}}>
      <div className="container mx-auto flex flex-col items-center text-gray-200">
        <h2 className="text-3xl font-bold mb-6">
        Experience the Best-in-Class Analytical and R&D Solutions Today!
        </h2>
        <p className="text-lg  mb-6">
        Dedicated to Supporting Your Business 24/7
        </p>
        <Link
          to="/contact"
          className="bg-gray-600 py-2 px-4 rounded-full hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
};

export default AnalyticalRDSolutions;
