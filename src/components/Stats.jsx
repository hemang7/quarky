import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicroscope,
  faHandHoldingHand,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";

const stats = [
  {
    stat: <FontAwesomeIcon icon={faUserDoctor} />,
    text: "Qualified Professionals",
  },
  { stat: <FontAwesomeIcon icon={faMicroscope} />, text: "Modern Equipment" },
  {
    stat: <FontAwesomeIcon icon={faHandHoldingHand} />,
    text: "24x7 Customer Support",
  },
];

const Stats = () => {
  return (
    <div className="w-screen  h-80 mt-10 mb-10 " style={{ marginTop: 200 }}>
      <div className="relative bg-gray-900 w-[90%] mx-auto rounded-sm p-8 ">
        <h4 className="mb-7 w-[80%] mx-auto text-center text-xl sm:text-4xl font-bold text-white">
          Trusted for quality from clients all over the world.
        </h4>

        <div className="mb-2 text-center mx-auto text-sm sm:text-lg text-gray-200">
          We are an innovation-driven R&D and Testing Lab with Headquarters in
          Jodhpur, Rajasthan, India. We are Rajasthan State FDA approved, NABL
          (ISO/IEC 17025) and ISO 9001:2015 Certified with compliance to
          requirements given in schedule L1 and GLP guidelines. Established on
          19th Oct. 2010 and now having more than a decade of experience, we
          have successfully achieved good heights and trust among all customers
          by providing various services to Pharmaceutical, Nutraceutical,
          Cosmetic and Herbal Industries
        </div>

        <div className="mb-5"></div>

        <div className="absolute  left-1/2 transform -translate-x-1/2 w-full sm:w-[105%] flex rounded-md shadow-md bg-white">
          {stats.map(({ stat, text }, idx) => (
            <div
              key={idx}
              className="flex-1 flex flex-col justify-center items-center border border-gray-200 p-5 sm:p-12"
            >
              <div className="font-bold mb-5 text-lg sm:text-3xl text-gray-900">
                {stat}
              </div>
              <div className="font-medium mt-2 text-sm sm:text-2xl">{text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-16"></div>
    </div>
  );
};

export default Stats;
