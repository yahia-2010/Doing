import React from "react";
import { Link } from "react-router-dom";

const SideButton = ({ link, label, icon }) => {
  return (
    <Link to={link}>
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default SideButton;
