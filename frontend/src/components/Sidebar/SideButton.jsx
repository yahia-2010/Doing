import React from "react";
import { Link } from "react-router-dom";

const SideButton = ({ link, label, icon }) => {
  return (
    <Link
      to={link}
      className="flex justify-between items-center w-full mr-16 group"
    >
      {icon}
      <span className="transition group-hover:text-color-primary capitalize">
        {label}
      </span>
    </Link>
  );
};

export default SideButton;
