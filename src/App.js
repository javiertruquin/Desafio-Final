import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavReactB from "./components/NavReactB";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio.jsx";
import Computadoras from "./pages/Computadoras";
import Login from "./pages/Login";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavReactB />
      <Switch>
        <Route path="/inicio">
          <Inicio />
        </Route>
        <Route path="/computadoras">
          <Computadoras />
        </Route>
        <Route path="/notebooks"></Route>
        <Route path="/accesorios"></Route>
        <Route path="/nosotros"></Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
