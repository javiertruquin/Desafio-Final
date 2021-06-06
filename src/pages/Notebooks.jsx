import slideNote1 from "../assets/img/slidenote1.png"
import slideNote2 from "../assets/img/slidenote2.png"
import slideNote3 from "../assets/img/slidenote3.png"

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
                    <img src={slideNote1} alt="" className="img-fluid" style={{  }}/>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img src={slideNote2} alt="" className="img-fluid" />
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img src={slideNote3} alt="" className="img-fluid" />
                </Carousel.Item>
            </Carousel>
            <div className="ps-4 mt-5 position-relative"><span className="titulo2 position-absolute">NOTEBOOKS</span></div>
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
