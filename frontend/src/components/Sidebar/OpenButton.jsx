import React from "react";
import { FaBars } from "react-icons/fa";

const OpenButton = ({ open }) => {
  return (
    <button
      className="absolute top-[82.5px] left-[27.5px] group"
      onClick={open}
    >
      <FaBars
        size={25}
        className="fill-gray-primary transition duration-200 group-hover:fill-color-primary dark:fill-gray-dark-primary"
      />
    </button>
  );
};

export default OpenButton;
