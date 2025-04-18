import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import List from "./Pages/List";
import HomePage from "./Pages/HomePage";
import RecherchePage from "./Pages/RecherchePage";
import AjoutPage from "./Pages/AjoutPage";
// Import MUI
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, CssBaseline, Button } from "@mui/material";
import { deepOrange, blueGrey } from "@mui/material/colors";
import { useState, useMemo, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function App() {

const [ mode, setMode ] = useState("light")

const theme = useMemo(() =>
  createTheme({
    palette: {
      mode: mode,
      primary: deepOrange,
      secondary: blueGrey,
      background: {
        default: mode === "light" ? "white" : "#333", 
      },
    }, 
  }), [mode]
);

const toggleMode = () => {
  setMode((prev) => (prev === "light" ? "dark" : "light"));
};

const isDark = theme.palette.mode === "dark"

useEffect(() => {
  document.body.className = isDark ? "dark" : "white";
}, [isDark]);

const [ hoveredIndex, setHoveredIndex ] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sex={{display: "flex"}}>
      <Router>
        <div className="App" style={{
          backgroundColor: isDark ? "#333" : "white",
          color: isDark ? "#f0f0f0" : "#000"
        }}>
          <header style={{
            backgroundColor: isDark ? "#333" : "white",
          }}>
            <nav className="navbar" style={{
              backgroundColor: isDark ? "#333" : "white",
              color: isDark ? "#f0f0f0" : "#000",
            }}>
              <ul className="ul_navbar">
              <li className="ul_li_navbar li_accueil routeDefault">
                  <Link
                    to="/"
                    onMouseEnter={() => setHoveredIndex(0)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      color: hoveredIndex === 0 ? (isDark ? "#56CCF2" : "#2F80ED") : (isDark ? "#f0f0f0" : "#333"),
                      textDecoration: "none"
                    }}
                  >Accueil</Link>
                </li>
                <li className="ul_li_navbar li_recherche">
                  <Link
                    to="/recherche"
                    onMouseEnter={() => setHoveredIndex(1)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      color: hoveredIndex === 1 ? (isDark ? "#56CCF2" : "#2F80ED") : (isDark ? "#f0f0f0" : "#333"),
                      textDecoration: "none"
                    }}
                  >Recherche</Link>
                </li>
                <li className="ul_li_navbar li_liste">
                  <Link
                    to="/liste"
                    onMouseEnter={() => setHoveredIndex(2)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      color: hoveredIndex === 2 ? (isDark ? "#56CCF2" : "#2F80ED") : (isDark ? "#f0f0f0" : "#333"),
                      textDecoration: "none"
                    }}
                  >Liste</Link>
                </li>
                <li className="ul_li_navbar li_ajout">
                  <Link
                    to="/ajouter"
                    onMouseEnter={() => setHoveredIndex(3)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      color: hoveredIndex === 3 ? (isDark ? "#56CCF2" : "#2F80ED") : (isDark ? "#f0f0f0" : "#333"),
                      textDecoration: "none"
                    }}
                  >Ajouter</Link>
                </li>
                <li className="dark_mode">
                    <Button onClick={toggleMode} variant="contained" sx={{
                    backgroundColor: isDark ? "#333" : "#f0f0f0",
                    color: isDark ? "#fff" : "#000",
                    '&:hover': {
                    backgroundColor: isDark ? "#333" : "#f0f0f0", 
                    boxShadow: "none",
                    borderRadius: 0,
                    },
                    boxShadow: "none",
                    borderRadius: 0,
                    }}>
                      <FontAwesomeIcon icon={isDark ? faSun : faMoon} style={{ marginRight: 8 }} />
                    </Button>
                  </li>
              </ul>
            </nav>
          </header>

          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/recherche" element={<RecherchePage />} />
              <Route path="/liste" element={<List />} />
              <Route path="/ajouter" element={<AjoutPage />} />
            </Routes>
          </main>
        </div>
      </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;



