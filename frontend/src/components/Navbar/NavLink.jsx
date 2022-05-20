import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ children, link }) => {
  return (
    <Link to={link} className="capitalize transition hover:text-color-primary">
      {children}
    </Link>
  );
};

export default NavLink;
