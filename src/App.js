import "./App.css";
import "./Admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-credit-cards/es/styles-compiled.css";
import NavReactB from "./components/NavReactB";
import NavAdmin from "./components/NavAdmin";
import UsuariosAdmin from "./components/UsuariosAdmin";
import EstadisticasAdmin from "./components/EstadisticasAdmin";
import ProductosAdmin from "./components/ProductosAdmin";
import VentaExitosa from "./pages/VentaExitosa";
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
import Mensaje from "./pages/Mensaje";
import Ventas from "./pages/Ventas";
import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Switch, useHistory } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

const localToken = JSON.parse(localStorage.getItem("token")) || "";
axios.defaults.headers = { "x-auth-token": localToken };

function App() {
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localToken);
    const [image, setImage] = useState("");
    const [productosFavoritos, setProductosFavoritos] = useState([]);
    let history = useHistory();

    const getFavoritos = async () => {
        try {
            const _id = user._id;
            const response = await axios.get("/auth/favoritos/", { id: _id });
            setProductosFavoritos(response.data.favoritos);
            localStorage.setItem(
                "favoritos",
                JSON.stringify(response.data.favoritos)
            );
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (token) {
            const request = async () => {
                axios.defaults.headers = { "x-auth-token": token };
                const { data } = await axios.get("/auth");
                setUser(data);
            };
            request();
            getFavoritos();
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
                <NavAdmin
                    token={token}
                    user={user}
                    logout={logout}
                    userRol={user.rol}
                />
            ) : (
                <NavReactB
                    logout={logout}
                    userName={user.nombre}
                    user={user}
                    setUser={setUser}
                    carrito={user.carrito}
                    token={token}
                    productosFavoritos={productosFavoritos}
                    getFavoritos={getFavoritos}
                />
            )}
            <Switch>
                <Route path="/" exact>
                    <Inicio
                        setUser={setUser}
                        productosFavoritos={productosFavoritos}
                        getFavoritos={getFavoritos}
                    />
                </Route>
                <Route path="/computadoras">
                    <Productos
                        categoriaFiltrada="computadora"
                        setUser={setUser}
                        productosFavoritos={productosFavoritos}
                        getFavoritos={getFavoritos}
                    />
                </Route>
                <Route path="/notebooks">
                    <Productos
                        categoriaFiltrada="notebook"
                        setUser={setUser}
                        productosFavoritos={productosFavoritos}
                        getFavoritos={getFavoritos}
                    />
                </Route>
                <Route path="/accesorios">
                    <Productos
                        categoriaFiltrada="accesorio"
                        setUser={setUser}
                        productosFavoritos={productosFavoritos}
                        getFavoritos={getFavoritos}
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
                    <Envio
                        user={user}
                        setUser={setUser}
                        carrito={user.carrito}
                    />
                </Route>
                <Route path="/login">
                    <Login setUser={setUser} setToken={setToken} />
                </Route>
                <Route path="/registro">
                    <Registro setToken={setToken} />
                </Route>
                <Route path="/productos">
                    <ProductosAdmin user={user} />
                </Route>
                <Route path="/usuarios">
                    <UsuariosAdmin user={user} />
                </Route>
                <Route path="/estadisticas">
                    <EstadisticasAdmin user={user} />
                </Route>
                <Route path="/mensaje">
                    <Mensaje user={user} />
                </Route>
                <Route path="/profile">
                    <Profile
                        setImage={setImage}
                        image={image}
                        setUser={setUser}
                        token={token}
                        user={user}
                    />
                </Route>
                <Route path="/exito">
                    <VentaExitosa user={user} />
                </Route>
                <Route path="/ventas">
                    <Ventas token={token} user={user} />
                </Route>
            </Switch>
            {user.rol === "admin" || user.rol === "vendedor" ? null : (
                <Footer />
            )}
        </>
    );
}

export default App;
