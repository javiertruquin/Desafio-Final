import slideAccesorio1 from "../assets/img/slideaccesorio1.png"
import slideAccesorio2 from "../assets/img/slideaccesorio2.png"
import slideAccesorio3 from "../assets/img/slideaccesorio3.png"

// import compu2 from "../assets/img/compu2.jpeg"
import { Carousel } from "react-bootstrap"
import SeccionEnviosPagos from "../components/SeccionEnviosPagos"
import BuscadorCategorias from "../components/BuscadorCategorias"
import CardProductoView from "../components/CardProductoView"

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

export default function Computadoras() {
    return (
        <div className="container ">
            <Carousel fade>
                <Carousel.Item interval={2500}>
                    <img src={slideAccesorio1} alt="" className="img-fluid" style={{  }}/>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img src={slideAccesorio2} alt="" className="img-fluid" />
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img src={slideAccesorio3} alt="" className="img-fluid" />
                </Carousel.Item>
            </Carousel>
            <div className="ps-4 mt-5 position-relative"><span className="titulo2 position-absolute">ACCESORIOS</span></div>
            <div className="row contenedor-seccion-compus">

                <p className=" subtitulo-seccion2">Laptops para todos las necesidades</p>


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
