import React, { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext("light");

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const toggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    setTheme(localStorage.getItem("theme"));
    document.body.classList.remove("light");
    document.body.classList.remove("dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
