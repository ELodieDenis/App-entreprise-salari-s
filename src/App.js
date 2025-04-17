import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PersonsEntreprise from "./Components/PersonsEntreprise";
import SelectEmployee from "./Components/SelectEmployee";
import Home from "./Components/Home";

function App() {
  return (
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
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/liste" element={<PersonsEntreprise />} />
            <Route path="/recherche" element={<SelectEmployee />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
