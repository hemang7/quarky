import React from "react";
import hero from "../assets/hero1.mp4";
import Typewriter from "./Typewriter";

const Banner = () => {
  return (
    <section className="relative">
      <video className="w-full  object-cover" autoPlay loop muted>
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center text-white text-center">
        <div>
          <h1 className="text-5xl font-bold mb-6 ">
            <Typewriter />
          </h1>
          <p className="text-xl mb-10 ">
            We specialize in innovative research and development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
