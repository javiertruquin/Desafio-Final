import React, { useState } from "react";
import SeccionCarrito from "../components/SeccionCarrito";
import { Redirect } from "react-router-dom";

export default function Carrito({ setUser, carrito }) {
    const localToken = JSON.parse(localStorage.getItem("token")) || "";
    const [token, setToken] = useState(localToken);
    if (!token) {
        alert("No estas logueado");
        return <Redirect to="/" />;
    }
    if (carrito?.length === 0) {
        alert("No tiene productos en el carrito");
        return <Redirect to="/" />;

    }
    return (
        <div>
            <SeccionCarrito
                view="carrito"
                setUser={setUser}
                carrito={carrito}
            />
        </div>
    );
}
