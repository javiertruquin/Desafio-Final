import SeccionAccesorios from "../components/SeccionAccesorios";
import SlideOfertas from "../components/SlideOfertas";
import SeccionCompus from "../components/SeccionCompus";
import SeccionEnviosPagos from "../components/SeccionEnviosPagos";
import SlideAccesorios from "../components/SlideAccesorios";
import SlideNotebooks from "../components/SlideNotebooks";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Inicio({
    setUser,
    productosFavoritos,
    getFavoritos,
}) {
    return (
        <div className="container">
            <SlideOfertas />
            <SeccionCompus
                limite="9"
                filtro={"computadora"}
                productosFavoritos={productosFavoritos}
                setUser={setUser}
                getFavoritos={getFavoritos}
            />
            <SeccionEnviosPagos />
            <SlideNotebooks className="mt-4" />
            <SeccionCompus
                limite="9"
                filtro={"notebook"}
                productosFavoritos={productosFavoritos}
                setUser={setUser}
                getFavoritos={getFavoritos}
            />
            <br />
            <SlideAccesorios className="mt-4" />
            <SeccionAccesorios
                limite="9"
                filtro={"accesorio"}
                productosFavoritos={productosFavoritos}
                setUser={setUser}
                getFavoritos={getFavoritos}
            />
        </div>
    );
}
