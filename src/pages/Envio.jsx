import React from "react";
import Footer from "../components/Footer";
import NavReactB from "../components/NavReactB";
import SeccionCarrito2 from "../components/SeccionCarrito2";
import SeccionEnvio from "../components/SeccionEnvio";

export default function Envio() {
    return (
        <div>
            <NavReactB />
            <div className="row mx-auto ">
                <div className="col-12 col-md-6">
                    <SeccionEnvio />
                </div>
                <div className="col-12 col-md-6">
                    <SeccionCarrito2 />
                </div>
            </div>
            <Footer />
        </div>
    );
}
