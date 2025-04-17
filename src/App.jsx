import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PersonsEntreprise from "./Components/PersonsEntreprise";
import SelectEmployee from "./Components/SelectEmployee";
import Home from "./Components/Home";
import AddPersons from "./Components/AddPersons";
import List from "./Pages/List";
import HomePage from "./Pages/HomePage";
import RecherchePage from "./Pages/RecherchePage";
import AjoutPage from "./Pages/AjoutPage";

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
              <li className="ul_li_navbar li_ajout">
                <Link to="/ajouter">Ajouter</Link>
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
  );
}

export default App;
