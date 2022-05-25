import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <button
      className="absolute top-[82.5px] right-[27.5px] group"
      onClick={toggle}
    >
      {theme === "light" ? (
        <FaMoon
          size={17.5}
          className="fill-gray-primary transition group-hover:fill-color-primary"
        />
      ) : (
        <FaSun
          size={17.5}
          className="fill-gray-primary transition group-hover:fill-color-primary"
        />
      )}
    </button>
  );
};

export default ThemeToggle;
