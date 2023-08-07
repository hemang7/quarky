import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

import "../../../src/index.css";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left md:cursor-pointer group">
            <a
              className="py-5 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                if (heading !== link.name) {
                  setHeading(link.name);
                  setSubHeading("");
                } else {
                  setHeading("");
                  setSubHeading("");
                }
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
            </a>
            {link.submenu && (
              <div>
                <div className="absolute top-12 hidden group-hover:md:block hover:md:block z-10">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.Head}>
                        <a className="text-lg font-semibold">
                          {mysublinks.Head}
                        </a>
                        {mysublinks.sublink.map((slink) => (
                          <li
                            className="text-sm text-gray-600 my-2.5"
                            key={slink.name}
                          >
                            <Link
                              to={slink.link}
                              className="hover:text-blue-500"
                              onClick={() => {
                                handleServiceClick(slink);
                                setHeading("");
                                setSubHeading("");
                              }}
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.Head}>
                <div>
                  <a
                    onClick={() => {
                      if (subHeading !== slinks.Head) {
                        setSubHeading(slinks.Head);
                      } else {
                        setSubHeading("");
                      }
                    }}
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                  >
                    {slinks.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </a>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14" key={slink.name}>
                        <Link
                          to={slink.link}
                          onClick={() => {
                            handleServiceClick(slink);
                            setSubHeading("");
                            setHeading("");
                          }}
                        >
                          {slink.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Render the active service */}
    </>
  );
};

export default NavLinks;
