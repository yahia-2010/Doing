import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ children, link }) => {
  const l = useLocation();
  const location = l.pathname;

  return (
    <Link
      to={link}
      className={`capitalize transition hover:text-color-primary ${
        location === `/${link.replace("/", "")}`
          ? "font-semibold text-color-primary"
          : "font-normal"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
