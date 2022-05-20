import React from "react";
import { Link } from "react-router-dom";

const NavListLink = ({ children }) => {
  return <Link to={children}>{children}</Link>;
};

export default NavListLink;
