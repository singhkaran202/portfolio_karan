import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { useEffect, useState } from "react";
import { WbSunny, Brightness2 } from "@material-ui/icons";
import ScrollToTop from "./components/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/Error/Error";
import Main from "./pages/Main";

function App() {
  // Toggle Theme Function
  const [theme, setTheme] = useState(
    localStorage.getItem("themeColor")
      ? localStorage.getItem("themeColor").toString()
      : "light"
  );

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("themeColor", theme);
  }, [theme]);

  return (
    <div className="App" id={theme}>
      <NavBar onClick={toggleTheme}>
        {theme === "light" ? <Brightness2 /> : <WbSunny />}
      </NavBar>

      <Routes>
        <Route path="/portfolio_karan" element={<Main />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {/* SCROLL TO TOP ICON  */}
      <ScrollToTop />
      <footer className="flex column footer">
        <small> &copy; 2023, all rights reserved</small>
        <small>
          Designed & Built by{"Karandeep"}
          <span className="alt-text TNP">&#xae;</span>{" "}
        
          </small>
        
      </footer>
    </div>
  );
}

export default App;