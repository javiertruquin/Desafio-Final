import SeccionAccesorios from "../components/SeccionAccesorios";
import SlideOfertas from "../components/SlideOfertas";
import SeccionCompus from "../components/SeccionCompus";
import SeccionEnviosPagos from "../components/SeccionEnviosPagos";
import SlideAccesorios from "../components/SlideAccesorios";
import SlideNotebooks from "../components/SlideNotebooks";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Inicio({ setUser, carrito, user,productosFavoritos,getFavoritos }) {

    return (
        <div className="container">
            <SlideOfertas />
            <SeccionCompus
                limite="9"
                productosFavoritos={productosFavoritos}
                user={user}
                filtro={"computadora"}
                setUser={setUser}
                carrito={carrito}
                getFavoritos={getFavoritos}
            />
            <SeccionEnviosPagos />
            <SlideNotebooks className="mt-4" />
            <SeccionCompus
                limite="9"
                user={user}
                productosFavoritos={productosFavoritos}
                filtro={"notebook"}
                setUser={setUser}
                carrito={carrito}
                getFavoritos={getFavoritos}
            />
            <br />
            <SlideAccesorios className="mt-4" />
            <SeccionAccesorios
                productosFavoritos={productosFavoritos}
                limite="9"
                user={user}
                filtro={"accesorio"}
                setUser={setUser}
                carrito={carrito}
                getFavoritos={getFavoritos}

            />
        </div>
    );
}
