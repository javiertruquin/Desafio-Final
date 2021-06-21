import React, { useState } from "react";
import SeccionCarrito from "../components/SeccionCarrito";
import SeccionTarjetas from "../components/SeccionTarjetas";
import { Redirect, useParams } from "react-router-dom";

export default function Pago({ setUser, carrito }) {
    const localToken = JSON.parse(localStorage.getItem("token")) || "";
    const [token, setToken] = useState(localToken);

    if (!token) {
        alert("No estas logueado");
        return <Redirect to="/" />;
    }
    return (
        <div>
            <div className="row mx-auto ">
                <div className="col-12 col-md-6">
                    <SeccionTarjetas />
                </div>
                <div className="col-12 col-md-6">
                    <SeccionCarrito setUser={setUser} carrito={carrito} />
                </div>
            </div>
        </div>
    );
}
