import React from "react";
import SeccionCarrito from "../components/SeccionCarrito";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";

export default function Carrito({ setUser, carrito }) {
    const localToken = JSON.parse(localStorage.getItem("token")) || "";
    if (!localToken) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No estás logueado",
            timer: 1800,
            showConfirmButton: false,
        });
        return <Redirect to="/" />;
    }
    if (carrito?.length === 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No tienes productos en el carrito",
            timer: 1800,
            showConfirmButton: false,
        });
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
