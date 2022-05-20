module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#fb8500",
        "gray-primary": "#9c9c9c",
        "gray-light": "#eee",
        "gray-dark-primary": "#282828",
        "gray-dark-secondary": "#373737",
      },
    },

    screens: {
      sm: "360px",
      md: "600px",
      lg: "960px",
      xl: "1024px",
    },
  },
  plugins: [],
};
