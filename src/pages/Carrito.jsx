import React, { useState } from 'react'
import Footer from '../components/Footer';
import NavReactB from '../components/NavReactB';
import SeccionCarrito from '../components/SeccionCarrito';
import { Redirect } from "react-router-dom";

export default function Carrito({setUser, carrito}) {
    const localToken = JSON.parse(localStorage.getItem("token")) || "";
    const [token, setToken] = useState(localToken);
    if (!token) {
        alert("No estas logueado");
        return <Redirect to="/" />;
    }
    return (
        <div>
            <SeccionCarrito view="carrito" setUser={setUser} carrito={carrito} />
        </div>
    )
}
