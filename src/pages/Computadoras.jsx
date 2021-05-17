import slideCompu1 from "../assets/img/slidecompus1.png"
import slideCompu2 from "../assets/img/slidecompus2.png"
import slideCompu3 from "../assets/img/slidecompus3.png"

import compu2 from "../assets/img/compu2.jpeg"
// import { Carousel, NavLink } from "react-bootstrap"
import SeccionEnviosPagos from "../components/SeccionEnviosPagos"
import BuscadorCategorias from "../components/BuscadorCategorias"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
                        <div className="col-3 my-1 p-4">
                            <button className="btn-serie">Serie Advance</button>
                            <img src={compu2} alt="" className="img-fluid" />
                            <p className="titulo-producto">Estación de trabajo HP Z2 Mini G4</p>
                            <ul className="detalle-producto">
                                <li>Procesador AMD Ryzen™ 3</li>
                                <li>Windows 10 Home 64</li>
                                <li>4 GB de SDRAM DDR4-2400 (1 x 4 GB)</li>
                                <li>Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB</li>
                                <li>Gráficos AMD Radeon™</li>
                            </ul>
                            <span className="precio-producto">$64.000</span>
                            <span> <button className="btn-heart"> <i class="fas fa-heart"></i></button></span>
                            <span> <button className="btn-cart"> <i class="fas fa-shopping-cart"></i></button></span>
                            <a href="/producto"><button className="btn-comprar mt-2" >Comprar</button></a>
                        </div>
                        <div className="col-3 my-1 p-4">
                            <button className="btn-serie">Serie Advance</button>
                            <img src={compu2} alt="" className="img-fluid" />
                            <p className="titulo-producto">Estación de trabajo HP Z2 Mini G4</p>
                            <ul className="detalle-producto">
                                <li>Procesador AMD Ryzen™ 3</li>
                                <li>Windows 10 Home 64</li>
                                <li>4 GB de SDRAM DDR4-2400 (1 x 4 GB)</li>
                                <li>Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB</li>
                                <li>Gráficos AMD Radeon™</li>
                            </ul>
                            <span className="precio-producto">$64.000</span>
                            <span> <button className="btn-heart"> <i class="fas fa-heart"></i></button></span>
                            <span> <button className="btn-cart"> <i class="fas fa-shopping-cart"></i></button></span>
                            <button className="btn-comprar mt-2" >Comprar</button>
                        </div>
                        <div className="col-3 my-1 p-4">
                            <button className="btn-serie">Serie Advance</button>
                            <img src={compu2} alt="" className="img-fluid" />
                            <p className="titulo-producto">Estación de trabajo HP Z2 Mini G4</p>
                            <ul className="detalle-producto">
                                <li>Procesador AMD Ryzen™ 3</li>
                                <li>Windows 10 Home 64</li>
                                <li>4 GB de SDRAM DDR4-2400 (1 x 4 GB)</li>
                                <li>Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB</li>
                                <li>Gráficos AMD Radeon™</li>
                            </ul>
                            <span className="precio-producto">$64.000</span>
                            <span> <button className="btn-heart"> <i class="fas fa-heart"></i></button></span>
                            <span> <button className="btn-cart"> <i class="fas fa-shopping-cart"></i></button></span>
                            <button className="btn-comprar mt-2" >Comprar</button>
                        </div>
                        <div className="col-3 my-1 p-4">
                            <button className="btn-serie">Serie Advance</button>
                            <img src={compu2} alt="" className="img-fluid" />
                            <p className="titulo-producto">Estación de trabajo HP Z2 Mini G4</p>
                            <ul className="detalle-producto">
                                <li>Procesador AMD Ryzen™ 3</li>
                                <li>Windows 10 Home 64</li>
                                <li>4 GB de SDRAM DDR4-2400 (1 x 4 GB)</li>
                                <li>Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB</li>
                                <li>Gráficos AMD Radeon™</li>
                            </ul>
                            <span className="precio-producto">$64.000</span>
                            <span> <button className="btn-heart"> <i class="fas fa-heart"></i></button></span>
                            <span> <button className="btn-cart"> <i class="fas fa-shopping-cart"></i></button></span>
                            <button className="btn-comprar mt-2" >Comprar</button>
                        </div>
                    </div>
                    

                </div>
                
            </div>
            <SeccionEnviosPagos />
        </div>
    );
}
