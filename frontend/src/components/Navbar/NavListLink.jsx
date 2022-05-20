import React from "react";
import { Link } from "react-router-dom";

const NavListLink = ({ children, pos }) => {
  return (
    <Link
      to={children}
      className={`capitalize bg-gray-light p-4 w-48 cursor-pointer transition hover:text-color-primary 
    rounded-${pos}-md rounded-tr-none
    `}
    >
      {children}
    </Link>
  );
};

export default NavListLink;
