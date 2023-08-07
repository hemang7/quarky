import { useEffect, useState } from "react";
import hero from "../assets/hero1.mp4";
import heroImage from "../assets/heroImage.png";
import "../index.css";

const Banner = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section className="banner-overlay relative sm:mt-10 mt-3">
      {/* Video on Large Screens */}
      <video
        className="w-full object-cover hidden sm:block"
        autoPlay
        loop
        muted
        preload="auto"
        style={{ height: "715px" }}
      >
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Image on Small Screens */}
      <div className="w-full h-96 sm:hidden">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-black text-center mx-10 md:mt-12">
        <div
          className={`sm:text-5xl text-3xl mb-4 text-white text-center ${
            fadeIn ? "fade-in" : ""
          }`}
        >
          <h1 className="font-bold">Quark Consultancy Services</h1>
          <p className="text-xl mt-4">
            We specialize in innovative research and development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
