import React from "react";
import NavLink from "./NavLink";
import NavList from "./NavList";
import ThemeToggle from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        className="flex fixed top-0 left-0 w-full z-50 justify-between items-center px-4 py-3 sm:px-6 sm:py-4
      md:px-8 bg-gray-light drop-shadow-sm dark:bg-gray-dark-primary dark:text-white"
      >
        <Link to="/" className="text-lg text-color-primary">
          Doing
        </Link>
        <div className="flex gap-x-5 sm:gap-x-7 md:gap-x-12 lg:gap-x-14 text-[15px]">
          <NavLink link="/">home</NavLink>
          <NavLink link="about">about</NavLink>
          <NavList />
        </div>
      </nav>
      <ThemeToggle />
    </>
  );
};

export default Navbar;
