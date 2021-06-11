import React from 'react'
import Footer from '../components/Footer';
import NavReactB from '../components/NavReactB';
import SeccionCarrito from '../components/SeccionCarrito';

export default function Carrito({token}) {
    return (
        <div>
            <SeccionCarrito token={token} />
            <Footer />
        </div>
    )
}
