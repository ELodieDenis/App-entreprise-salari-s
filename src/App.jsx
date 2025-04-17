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
import { useState, useMemo } from "react";

function App() {

const [ mode, setMode ] = useState("light")

const theme = useMemo(() =>
  createTheme({
    palette: {
      mode: mode,
      primary: deepOrange,
      secondary: blueGrey,
    },
  }), [mode]
);

const toggleMode = () => {
  setMode((prev) => (prev === "light" ? "dark" : "light"));
};


// const [ open, setOpen ] = useState(true)
// const toggleDrawer = () => {
//   setOpen(!open)
// }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sex={{display: "flex"}}>
      <Router>
        <div className="App">
          <header>
            <nav className="navbar">
              <ul className="ul_navbar">
                <li className="ul_li_navbar li_accueil routeDefault">
                  <Link to="/">Accueil</Link>
                </li>
                <li className="ul_li_navbar li_recherche">
                  <Link to="/recherche">Recherche</Link>
                </li>
                <li className="ul_li_navbar li_liste">
                  <Link to="/liste">Liste</Link>
                </li>
                <li className="ul_li_navbar li_ajout">
                  <Link to="/ajouter">Ajouter</Link>
                </li>
                <li className="dark_mode">
                    <Button onClick={toggleMode} variant="contained">
                      Mode {mode === "light" ? "Sombre" : "Clair"}
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

