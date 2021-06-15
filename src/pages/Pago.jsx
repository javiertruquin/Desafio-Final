import React from 'react'
import Footer from '../components/Footer';
import NavReactB from '../components/NavReactB';
import SeccionCarrito2 from '../components/SeccionCarrito2';
import SeccionTarjetas from "../components/SeccionTarjetas";

export default function Pago() {
    return (
        <div>
            <div className="row mx-auto ">
                <div className="col-12 col-md-6">
                    <SeccionTarjetas />
                </div>
                <div className="col-12 col-md-6">
                    <SeccionCarrito2 />
                </div>
            </div>
        </div>
    );
}