import React from "react";
import about from "../assets/about.jpg";

const AboutUsPage = () => {
  return (
    <div className="mt-10 mb-12" style={{ marginBottom: 150 }}>
      <div
        className="container mx-auto px-4 py-12"
        style={{ paddingTop: "10%" }}
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src={about}
              alt="Company"
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:ml-8">
            <h2 className="text-2xl font-bold mb-4">
              WHERE INNOVATION MEETS EXCELLENCE
            </h2>

            <p className="text-lg mt-4">
              At Quark Consultancy Services, we are dedicated to providing
              innovative solutions and delivering excellence to our clients.
              With years of experience in the industry, our team of highly
              skilled professionals is committed to helping businesses thrive
              and succeed. Our team of experienced professionals combines
              technical knowledge with strategic insights to deliver innovative
              solutions. Whether it's process optimization, quality control,
              regulatory compliance, or product development, we offer
              specialized expertise across the chemical value chain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
