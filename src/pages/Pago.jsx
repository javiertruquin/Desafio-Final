import React from 'react'
import Footer from '../components/Footer';
import NavReactB from '../components/NavReactB';
import SeccionCarrito from '../components/SeccionCarrito';
import SeccionTarjetas from "../components/SeccionTarjetas";

export default function Pago({setUser, carrito}) {
    return (
        <div>
            <NavReactB />
            <div className="row mx-auto ">
                <div className="col-12 col-md-6">
                    <SeccionTarjetas />
                </div>
                <div className="col-12 col-md-6">
                    <SeccionCarrito setUser={setUser} carrito={carrito} />
                </div>
            </div>
            <Footer />
        </div>
    );
}