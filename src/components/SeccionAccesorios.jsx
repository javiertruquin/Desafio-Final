import { Carousel } from "react-bootstrap";
import compu2 from "../assets/img/compu2.jpeg"


export default function SeccionAccesorios() {
    return (
        <div className="container position-relative">
            <span className="titulo1 ps-4">ACCESORIOS</span>
            <div className="row contenedor-seccion-compus">
                <p className=" subtitulo-seccion2">Equipos de escritorio para todos los bolsillos</p>


                <div className="col-12 contenedor-items pb-4">

                    <Carousel>
                        <Carousel.Item interval={2500}>
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
                        </Carousel.Item>
                    </Carousel>

                </div>
            </div>

        </div>
    )
}
