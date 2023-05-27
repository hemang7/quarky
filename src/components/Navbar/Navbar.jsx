import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-20 h-13">
      <div className="flex items-center font-medium justify-between px-4 py-2">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link to="/">
            <img src={Logo} alt="logo" className="md:cursor-pointer h-12" />
          </Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <NavLink
              exact
              to="/"
              className="py-7 px-3 inline-block hover:text-blue-400"
              activeClassName="text-blue-500"
            >
              Home
            </NavLink>
          </li>

          <NavLinks />

          <li>
            <NavLink
              to="/about"
              className="py-7 px-3 inline-block hover:text-blue-500"
              activeClassName="text-blue-500"
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="py-7 px-3 inline-block hover:text-blue-500"
              activeClassName="text-blue-500"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="md:block hidden"></div>
        {/* Mobile nav */}
        <ul
          className={`
            md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
            duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}
        >
          <li>
            <NavLink
              exact
              to="/"
              className="py-7 px-3 inline-block hover:text-blue-500"
              activeClassName="text-blue-500"
            >
              Home
            </NavLink>
          </li>
          <NavLinks />
          <li>
            <NavLink
              to="/about"
              className="py-7 px-3 inline-block hover:text-blue-500"
              activeClassName="text-blue-500"
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="py-7 px-3 inline-block hover:text-blue-500"
              activeClassName="text-blue-500"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
