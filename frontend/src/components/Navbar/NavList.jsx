import React, { useState } from "react";
import NavListLink from "./NavListLink";
import { FaChevronRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const NavList = () => {
  const [isClicked, setIsClicked] = useState(false);
  const l = useLocation();
  const location = l.pathname;

  return (
    <div className="relative " onClick={() => setIsClicked(!isClicked)}>
      <div className="capitalize cursor-pointer flex items-center group gap-x-1">
        <span
          className={`transition group-hover:text-color-primary ${
            location === "/signup" || location === "/login"
              ? "font-semibold text-color-primary"
              : "font-normal"
          }`}
        >
          account
        </span>
        <FaChevronRight
          className={` transition rotate-90 group-hover:fill-color-primary ${
            isClicked || "rotate-0"
          } ${
            location === "/signup" || location === "/login"
              ? "fill-color-primary"
              : ""
          }`}
          size={12}
        />
      </div>
      <div
        className={`transition ${
          isClicked
            ? "translate-y-0 pointer-events-auto opacity-100"
            : "opacity-0 pointer-events-none -translate-y-10"
        }   absolute flex flex-col right-0 gap-y-1 top-[4.25rem] z-40 
        before:border-b-gray-light dark:before:border-b-gray-dark-primary triangle

      `}
      >
        <NavListLink>signup</NavListLink>
        <NavListLink>login</NavListLink>
      </div>
    </div>
  );
};

export default NavList;
