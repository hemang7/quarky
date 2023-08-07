import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Close the hamburger menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-20">
      <div className="flex items-center font-medium justify-between">
        <div className="p-3 md:w-auto w-full gap-10 flex justify-between ">
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              className="cursor-pointer sm:h-10 h-8 mt-1"
            />
          </Link>
          <div
            className="text-3xl md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <ion-icon name="close"></ion-icon>
            ) : (
              <ion-icon style={{marginTop: "3px"}} name="menu"></ion-icon>
            )}
          </div>
        </div>
        <ul
          style={{ marginRight: "15rem" }}
          className={`${
            open ? "flex" : "hidden"
          } md:flex uppercase items-center gap-10 font-[Poppins]`}
        >
          <li>
            <NavLink
              exact
              to="/"
              className="py-7 px-3 inline-block hover:text-blue-400"
              activeClassName="text-blue-400"
              onClick={() => setOpen(false)} // Close the hamburger menu on link click
            >
              Home
            </NavLink>
          </li>
          <NavLinks className="mr-4" />{" "}
          {/* Add the margin-right utility class */}
          <li>
            <NavLink
              to="/about"
              className="py-7 px-3 inline-block hover:text-blue-400"
              activeClassName="text-blue-400"
              onClick={() => setOpen(false)} // Close the hamburger menu on link click
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="py-7 px-3 inline-block hover:text-blue-400"
              activeClassName="text-blue-400"
              onClick={() => setOpen(false)} // Close the hamburger menu on link click
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Mobile nav */}
      <ul
        className={`
          md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-5 pl-4
          duration-500 ${open ? "left-0" : "-left-full"}
        `}
      >
        <li className="flex justify-end pr-4">
          <div className="text-3xl cursor-pointer" onClick={handleCloseMenu}>
            <ion-icon name="close"></ion-icon>
          </div>
        </li>
        <li>
          <NavLink
            exact
            to="/"
            className="py-7 px-3 inline-block hover:text-blue-400"
            activeClassName="text-blue-400"
            onClick={handleCloseMenu} // Close the hamburger menu on link click
          >
            Home
          </NavLink>
        </li>
        <NavLinks className="mr-4" /> {/* Add the margin-right utility class */}
        <li>
          <NavLink
            to="/about"
            className="py-7 px-3 inline-block hover:text-blue-400"
            activeClassName="text-blue-400"
            onClick={handleCloseMenu} // Close the hamburger menu on link click
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="py-7 px-3 inline-block hover:text-blue-400"
            activeClassName="text-blue-400"
            onClick={handleCloseMenu} // Close the hamburger menu on link click
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;