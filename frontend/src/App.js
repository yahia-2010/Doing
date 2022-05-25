import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { ThemeContextProvider } from "./contexts/themeContext";

function App() {
  return (
    <ThemeContextProvider>
      <Navbar />
      <Sidebar />
      <Outlet />
    </ThemeContextProvider>
  );
}

export default App;
