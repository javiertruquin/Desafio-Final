import React from "react";
import Footer from "../components/Footer";
import NavReactB from "../components/NavReactB";
import SeccionCarrito from "../components/SeccionCarrito";
import SeccionEnvio from "../components/SeccionEnvio";

export default function Envio({setUser, carrito}) {
    return (
        <div>
            {/* <NavReactB /> */}
            <div className="row mx-auto ">
                <div className="col-12 col-md-6">
                    <SeccionEnvio />
                </div>
                <div className="col-12 col-md-6">
                    <SeccionCarrito view="envio" setUser={setUser} carrito={carrito}/>
                </div>
            </div>
        </div>
    );
}
