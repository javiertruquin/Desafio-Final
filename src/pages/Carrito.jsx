import React from 'react'
import Footer from '../components/Footer';
import NavReactB from '../components/NavReactB';
import SeccionCarrito from '../components/SeccionCarrito';

export default function Carrito({setUser, carrito}) {
    return (
        <div>
            <SeccionCarrito view="carrito" setUser={setUser} carrito={carrito} />
        </div>
    )
}
