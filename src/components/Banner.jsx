import React from "react";
import hero from "../assets/hero1.mp4";
import Typewriter from "./Typewriter";

const Banner = () => {
  return (
    <section className="relative">
<<<<<<< HEAD
      <div
        className="relative h-screen md:h-[calc(100vh-13rem)] xl:h-screen"
        style={{
          marginTop: "-4rem",
        }}
      >
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src={hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{
            marginTop: "-4rem",
          }}
        ></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-center">
        <div>
          <h1
            className="text-5xl font-bold mb-6"
            style={{
              marginTop: "10rem",
            }}
          >
=======
      <video className="w-full  object-cover" autoPlay loop muted>
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center text-white text-center">
        <div>
          <h1 className="text-5xl font-bold mb-6 ">
>>>>>>> b2ebe123cf82663a2eede326466d58369bc867d1
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
