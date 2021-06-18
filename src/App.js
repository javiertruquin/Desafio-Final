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
import Productos from "./pages/Productos";
import Producto from "./pages/Producto";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import SobreNosotros from "./pages/SobreNosotros";
import Carrito from "./pages/Carrito";
import Envio from "./pages/Envio";
import Pago from "./pages/Pago";
import Mensaje from "./pages/Mensaje";
import styles from "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useHistory,
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

const localToken = JSON.parse(localStorage.getItem("token")) || "";
axios.defaults.headers = { "x-auth-token": localToken };

function App() {
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localToken);
    let history = useHistory();

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
        history.push("/");
    };

    return (
        <>
            <Route>
                <ScrollToTop></ScrollToTop>
            </Route>
            {user.rol === "admin" || user.rol === "vendedor" ? (
                <NavAdmin logout={logout} userRol={user.rol} />
            ) : (
                <NavReactB
                    logout={logout}
                    userName={user.nombre}
                    carrito={user.carrito}
                />
            )}
            <Switch>
                <Route path="/" exact>
                    <Inicio setUser={setUser} carrito={user.carrito} />
                </Route>
                <Route path="/computadoras">
                    <Productos
                        categoriaFiltrada="computadora"
                        setUser={setUser}
                        carrito={user.carrito}
                    />
                </Route>
                <Route path="/notebooks">
                    <Productos
                        categoriaFiltrada="notebook"
                        setUser={setUser}
                        carrito={user.carrito}
                    />
                </Route>
                <Route path="/accesorios">
                    <Productos
                        categoriaFiltrada="accesorio"
                        setUser={setUser}
                        carrito={user.carrito}
                    />
                </Route>
                <Route path="/nosotros">
                    <SobreNosotros />
                </Route>
                <Route path="/producto/:id">
                    <Producto setUser={setUser} />
                </Route>
                <Route path="/carrito">
                    <Carrito setUser={setUser} carrito={user.carrito} />
                </Route>
                <Route path="/envio">
                    <Envio setUser={setUser} carrito={user.carrito} />
                </Route>
                <Route path="/pago">
                    <Pago setUser={setUser} carrito={user.carrito} />
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
                <Route path="/estadisticas">
                    <EstadisticasAdmin />
                </Route>
                <Route path="/mensaje">
                    <Mensaje />
                </Route>
                <Route path="/profile">
                    <Profile token={token} user={user} />
                </Route>
            </Switch>
            {user.rol === "admin" || user.rol === "vendedor" ? null : (
                <Footer />
            )}
            {/* { localToken === '' && <Footer /> }
      { user.rol === 'usuario' && <Footer /> } */}
            {/* {console.log('users', user)} */}
            {/* { !user.rol === 'admin' && <Footer /> } */}
            {/* { !user.rol === 'vendedor' && <Footer /> } */}
            {/* { (!user.rol === 'admin' || !user.rol === 'vendedor' ) && <Footer /> } */}
        </>
    );
}

export default App;
