import React from "react";
import NavListLink from "./NavListLink";

const NavList = () => {
  return (
    <div>
      <span className="capitalize cursor-pointer">account</span>
      <NavListLink>signup</NavListLink>
      <NavListLink>login</NavListLink>
    </div>
  );
};

export default NavList;
