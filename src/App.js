import "./App.css";
import "./Admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-credit-cards/es/styles-compiled.css';
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
import styles from "./styles.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
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
          <Login />
        </Route>
        <Route path="/registro">
          <Registro />
        </Route>
        <Route path="/productos">
          <NavAdmin />
          <ProductosAdmin />
        </Route>
        <Route path="/usuarios">
          <NavAdmin />
          <UsuariosAdmin />
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
