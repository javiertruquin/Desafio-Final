import "./App.css";
import "./Admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-credit-cards/es/styles-compiled.css";
import NavReactB from "./components/NavReactB";
import NavAdmin from "./components/NavAdmin";
import ProductosAdmin from "./components/ProductosAdmin";
import UsuariosAdmin from "./components/UsuariosAdmin";
import EstadisticasAdmin from "./components/EstadisticasAdmin";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio.jsx";
import Computadoras from "./pages/Computadoras";
import Producto from "./pages/Producto";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import SobreNosotros from "./pages/SobreNosotros";
import Carrito from "./pages/Carrito";
import Pago from "./pages/Pago";
import Tucuman from "./pages/Tucuman";
import Capital from "./pages/Capital";
import Rosario from "./pages/Rosario";
import Sannicolas from "./pages/Sannicolas";
import styles from "./styles.css";
import { useState } from "react";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [user, setUser] = useState('');
  const [token, setToken] = useState('');

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <NavReactB />
          <Inicio />
          <Footer />
        </Route>
        <Route path="/computadoras">
          <NavReactB />
          <Computadoras />
          <Footer />
        </Route>
        <Route path="/notebooks">
          <NavReactB />
          <Footer />
        </Route>
        <Route path="/accesorios">
          <NavReactB />
          <Footer />
        </Route>
        <Route path="/nosotros">
          <NavReactB />
          <SobreNosotros />
          <Footer />
        </Route>
        <Route path="/producto">
          <Producto />
        </Route>
        <Route path="/carrito">
          <Carrito />
        </Route>
        <Route path="/pago">
          <Pago />
        </Route>
        <Route path="/login">
          <NavReactB />
          <Login setUser={setUser} setToken={setToken} />
          <Footer />
        </Route>
        <Route path="/registro">
          <NavReactB />
          <Registro setToken={setToken} />
          <Footer />
        </Route>
        <Route path="/productos">
          <NavAdmin />
          <ProductosAdmin />
        </Route>
        <Route path="/usuarios">
          <NavAdmin />
          <UsuariosAdmin />
        </Route>
        <Route path="/tucuman">
          <NavReactB />
          <Tucuman />
        </Route>
        <Route path="/capital">
          <NavReactB />
          <Capital />
        </Route>
        <Route path="/rosario">
          <NavReactB />
          <Rosario />
        </Route>
        <Route path="/sannicolas">
          <NavReactB />
          <Sannicolas />
        </Route>
        <Route path="/estadisticas">
          <NavAdmin />
          <EstadisticasAdmin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
