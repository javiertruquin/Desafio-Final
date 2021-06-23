import React, { useState } from "react";
import SeccionCarrito from "../components/SeccionCarrito";
import SeccionTarjetas from "../components/SeccionTarjetas";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";

export default function Pago({ setUser, carrito }) {
    const localToken = JSON.parse(localStorage.getItem("token")) || "";
    const [token, setToken] = useState(localToken);

    if (!token) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No estás logueado",
            timer: 1800,
            showConfirmButton: false,
        });        return <Redirect to="/" />;
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
