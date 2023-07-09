import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-4 pt-8 md:pt-28 text-xs sm:text-sm bg-blue-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-20">
          <div className="md:w-1/2">
            <div className="mb-6 text-bold text-gray-200">
              Elevating Businesses through Strategic Insights, Innovation, and
              Unparalleled Expertise.
            </div>
          </div>

<<<<<<< HEAD
          <div className="md:w-1/2 md:ml-8 flex flex-col md:flex-row md:justify-end md:items-center text-gray-200">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Reach out</h2>
              <p className="mb-2">Phone: (123) 456-7890</p>
              <p className="mb-2">Email: example@example.com</p>
              <p className="mb-2">Opening Hours: Mon-Fri 9am-5pm</p>
=======
          <div className="md:w-1/2 md:ml-8 flex justify-end mr-5 text-gray-200">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4t ">Reach out</h2>
              <p>Phone: (123) 456-7890</p>
              <p>Email: quarkcs0702@gmail.com</p>
              <p>Opening Hours: Mon-Fri 9am-5pm</p>
>>>>>>> b2ebe123cf82663a2eede326466d58369bc867d1
              <p>FAQs or Frequently Asked Questions</p>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <div className="mt-8 sm:mt-16 border-t border-gray-600 py-7 text-gray-300 text-xs flex justify-between items-center">
          <div>&copy; {currentYear} Quark Consultancy Services. All rights reserved</div>
          <button
            className="bg-blue-600 hover:bg-blue-500 rounded-full p-2 focus:outline-none"
=======
        <div className="mt-8 sm:mt-16 border-t border-gray-600 py-7 text-gray-300 text-xs">
          &copy; {currentYear} Quark Consultancy Services. All rights reserved
        </div>
        <div className="text-right mr-5">
          <button
            className=" bg-blue-600 hover:bg-blue-500 rounded-full p-2 focus:outline-none mb-5"
>>>>>>> b2ebe123cf82663a2eede326466d58369bc867d1
            onClick={scrollToTop}
          >
            <FontAwesomeIcon icon={faChevronUp} size="lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
