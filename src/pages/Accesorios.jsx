import slideAccesorio1 from "../assets/img/slideaccesorio1.png";
import slideAccesorio2 from "../assets/img/slideaccesorio2.png";
import slideAccesorio3 from "../assets/img/slideaccesorio3.png";

// import compu2 from "../assets/img/compu2.jpeg"
import { Carousel } from "react-bootstrap";
import SeccionEnviosPagos from "../components/SeccionEnviosPagos";
import BuscadorCategorias from "../components/BuscadorCategorias";
import CardProductoView from "../components/CardProductoView";
import SlideAccesorios from "../components/SlideAccesorios";

import { useEffect, useState } from "react";
import axios from "axios";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

export default function Accesorios({ setUser, carrito }) {
    const [computadoras, setComputadoras] = useState([]);

    useEffect(() => {
        const getComputadoras = async () => {
            const response = await axios.get(`/producto`);
            console.log("getComputadoras ~ response", response);
            setComputadoras(response.data);
        };
        getComputadoras();
    }, []);

    return (
        <div className="container ">
            <SlideAccesorios className="mt-4" />

            <div className="ps-4 mt-5 position-relative">
                <span className="titulo2 position-absolute">NOTEBOOK'S</span>
            </div>
            <div className="row contenedor-seccion-compus">
                <p className=" subtitulo-seccion2">
                    Equipos de escritorio para todos los bolsillos
                </p>

                <div className="col-12 contenedor-items pb-4">
                    <BuscadorCategorias />
                    <div className="row">
                        {computadoras.map((computadora) => (
                            <div className="col-sm-12 col-lg-6 col-xl-4">
                                <CardProductoView
                                    setUser={setUser}
                                    computadora={computadora}
                                    carrito={carrito}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <SeccionEnviosPagos />
        </div>
    );
}
