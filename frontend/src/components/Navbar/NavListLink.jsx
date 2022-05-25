import React from "react";
import { Link } from "react-router-dom";

const NavListLink = ({ children }) => {
  return (
    <Link
      to={children}
      className={`capitalize bg-gray-light p-4 w-48 cursor-pointer transition hover:text-color-primary
      drop-shadow-sm dark:bg-gray-dark-primary first:rounded-tl-md last:rounded-b-md
    `}
    >
      {children}
    </Link>
  );
};

export default NavListLink;
