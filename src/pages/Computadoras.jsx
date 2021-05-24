import slideCompu1 from "../assets/img/slidecompus1.png"
import slideCompu2 from "../assets/img/slidecompus2.png"
import slideCompu3 from "../assets/img/slidecompus3.png"

// import compu2 from "../assets/img/compu2.jpeg"
import { Carousel } from "react-bootstrap"
import SeccionEnviosPagos from "../components/SeccionEnviosPagos"
import BuscadorCategorias from "../components/BuscadorCategorias"
import CardProductoView from "../components/CardProductoView"

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

export default function Computadoras() {
    return (
        <div className="container position-relative">
            <Carousel fade>
                <Carousel.Item interval={2500}>
                    <img src={slideCompu1} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img src={slideCompu2} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img src={slideCompu3} alt="" />
                </Carousel.Item>
            </Carousel>
            <div className="row contenedor-seccion-compus">
                <span className="titulo2 ps-4">COMPUTADORAS</span>
                <p className=" subtitulo-seccion2">Equipos de escritorio para todos los bolsillos</p>


                <div className="col-12 contenedor-items pb-4">
                    <BuscadorCategorias />
                    <div className="row">
                        <CardProductoView />
                        <CardProductoView />
                        <CardProductoView />
                        <CardProductoView />
                    </div>
                    

                </div>
                
            </div>
            <SeccionEnviosPagos />
        </div>
    );
}
