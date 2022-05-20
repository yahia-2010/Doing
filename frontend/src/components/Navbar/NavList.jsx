import React from "react";
import NavListLink from "./NavListLink";

const NavList = () => {
  return (
    <div>
      <span>account</span>
      <NavListLink>signup</NavListLink>
      <NavListLink>login</NavListLink>
    </div>
  );
};

export default NavList;
