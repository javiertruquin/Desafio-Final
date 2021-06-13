import "./App.css";
import "./Admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-credit-cards/es/styles-compiled.css";
import NavReactB from "./components/NavReactB";
import NavAdmin from "./components/NavAdmin";
import UsuariosAdmin from "./components/UsuariosAdmin";
import EstadisticasAdmin from "./components/EstadisticasAdmin";
import ProductosAdmin from "./components/ProductosAdmin";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio.jsx";
import Computadoras from "./pages/Computadoras";
import Notebooks from "./pages/Notebooks";
import Accesorios from "./pages/Accesorios";
import Producto from "./pages/Producto";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import SobreNosotros from "./pages/SobreNosotros";
import Carrito from "./pages/Carrito";
import Envio from "./pages/Envio";
import Pago from "./pages/Pago";
import Tucuman from "./pages/Tucuman";
import Capital from "./pages/Capital";
import Rosario from "./pages/Rosario";
import Sannicolas from "./pages/Sannicolas";
import Mensaje from "./pages/Mensaje";
import styles from "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

const localToken = JSON.parse(localStorage.getItem("token")) || "";
axios.defaults.headers = { "x-auth-token": localToken };

function App() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localToken);
  useEffect(() => {
    if (token) {
      const request = async () => {
        axios.defaults.headers = { "x-auth-token": token };
        const { data } = await axios.get("/auth");
        setUser(data);
      };
      request();
    }
  }, [token]);

  // Para hacer el logout

  const logout = () => {
    localStorage.removeItem("token");
    axios.defaults.headers = { "x-auth-token": "" };
    setUser({});
    setToken("");
  };

  return (
    <Router>
      <Route>
        <ScrollToTop></ScrollToTop>
      </Route>
      {user.rol === "admin" || user.rol === "vendedor" ? (
        <NavAdmin logout={logout} userName={user.nombre} />
      ) : (
        <NavReactB
          logout={logout}
          userName={user.nombre}
          carrito={user.carrito}
        />
      )}
      <Switch>
        <Route path="/" exact>
          <Inicio />
        </Route>
        <Route path="/computadoras">
          <Computadoras setUser={setUser} carrito={user.carrito} />
          <Footer />g{" "}
        </Route>
        <Route path="/notebooks">
          <Notebooks />
        </Route>
        <Route path="/accesorios">
          <Accesorios />
        </Route>
        <Route path="/nosotros">
          <SobreNosotros />
        </Route>
        <Route path="/producto">
          <Producto />
        </Route>
        <Route path="/carrito">
          <Carrito setUser={setUser} carrito={user.carrito} />
        </Route>
        <Route path="/envio">
          <Envio />
        </Route>
        <Route path="/pago">
          <Pago />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} setToken={setToken} />
        </Route>
        <Route path="/registro">
          <Registro setToken={setToken} />
        </Route>
        <Route path="/productos">
          <ProductosAdmin />
        </Route>
        <Route path="/usuarios">
          <UsuariosAdmin />
        </Route>
        <Route path="/tucuman">
          <Tucuman />
        </Route>
        <Route path="/capital">
          <Capital />
        </Route>
        <Route path="/rosario">
          <Rosario />
        </Route>
        <Route path="/sannicolas">
          <Sannicolas />
        </Route>
        <Route path="/estadisticas">
          <EstadisticasAdmin />
        </Route>
        <Route path="/mensaje">
          <Mensaje />
        </Route>
        <Route path="/profile">
          <Profile user={user} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
