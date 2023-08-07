import React from "react";
import { useEffect, useState } from "react";
import about from "../assets/about.jpg";
import "../index.css";

const AboutUsPage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className=" mb-12 md:my-10" style={{ marginBottom: 150 }}>
      <div className="container mx-auto px-4" style={{ paddingTop: "4%" }}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mt-10">
            <img src={about} alt="Company" className="m-auto rounded-md" />
          </div>
          <div className="md:w-1/2 mt-3 mr-10 ">
            <h4
              className={`flex justify-center text-5xl text-bold mb-5 sm:mt-5 ${
                fadeIn ? "fade-in" : ""
              }`}
            >
              About Us
            </h4>
            <hr className="w-48 h-1 mx-auto mb-12 bg-blue-300" />

            <div className={`fade-in ${fadeIn ? "fade-in-delayed" : ""}`}>
              <p className="text-lg mt-8">
                At Quark Consultancy Services, we are dedicated to providing
                innovative solutions and delivering excellence to our clients.
                With years of experience in the industry, our team of highly
                skilled professionals is committed to helping businesses thrive
                and succeed. Our team of experienced professionals combines
                technical knowledge with strategic insights to deliver
                innovative solutions. Whether it's process optimization, quality
                control, regulatory compliance, or product development, we offer
                specialized expertise across the chemical value chain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
