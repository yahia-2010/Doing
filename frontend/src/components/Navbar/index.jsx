import React from "react";
import NavLink from "./NavLink";
import NavList from "./NavList";

const Navbar = () => {
  return (
    <nav>
      <p>Doing</p>
      <NavLink link="/">home</NavLink>
      <NavLink link="about">about</NavLink>
      <NavList />
    </nav>
  );
};

export default Navbar;
