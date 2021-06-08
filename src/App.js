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
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const localToken = JSON.parse(localStorage.getItem('token'))?.token || '';


function App() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localToken);

  useEffect(() => {
    if (token) {
        const request = async () => {
            axios.defaults.headers = { 'x-auth-token': token };
            const { data } = await axios.get('/auth');
            setUser(data);
        };
        request();
    }
}, [token]);

const logout = () => {
  localStorage.removeItem('token');
  axios.defaults.headers = { 'x-auth-token': '' };
  setUser({});
  setToken('');
};

// Para hacer el logout

// const logout = () => {
//     localStorage.removeItem('token');
//     axios.defaults.headers = { 'x-auth-token': '' };
//     setUser({});
//     setToken('');
// };



  return (
    <Router>
      
      {(user.roll === 'admin' || user.roll === 'vendedor') ? <NavAdmin /> : <NavReactB />}
      <Switch>
        <Route path="/" exact>
          <Inicio />
          <Footer />
        </Route>
        <Route path="/computadoras">
          <Computadoras />
          <Footer />
        </Route>
        <Route path="/notebooks">
          <Footer />
        </Route>
        <Route path="/accesorios">
          <Footer />
        </Route>
        <Route path="/nosotros">
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
          <Login setUser={setUser} setToken={setToken} />
          <Footer />
        </Route>
        <Route path="/registro">
          <Registro setToken={setToken} />
          <Footer />
        </Route>
        <Route path="/productos">
          <ProductosAdmin token={token} />
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
      </Switch>
    </Router>
  );
}

export default App;
