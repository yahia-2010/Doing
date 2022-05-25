import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideButton = ({ link, label, icon }) => {
  const l = useLocation();
  const location = l.pathname;

  return (
    <Link
      to={link}
      className={`flex justify-between items-center w-full mr-16 group ${
        location === `/${link.replace("/", "")}`
          ? "font-semibold text-color-primary"
          : "font-normal"
      }`}
    >
      <span
        className={
          location === `/${link.replace("/", "")}`
            ? "child:child:fill-color-primary"
            : ""
        }
      >
        {icon}
      </span>
      <span className="transition group-hover:text-color-primary capitalize">
        {label}
      </span>
    </Link>
  );
};

export default SideButton;
