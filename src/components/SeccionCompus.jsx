import { Carousel } from "react-bootstrap"
import compu1 from "../assets/img/compu1.jpeg"
import compu2 from "../assets/img/compu2.jpeg"
import compu3 from "../assets/img/compu3.jpeg"
import metodoPago from "../assets/img/metodospago.png"

function SeccionCompus() {
    return (
        <div className="container position-relative">
                            <span className="titulo1 ps-4">COMPUTADORAS</span> 
            <div className="row contenedor-seccion-compus">

                <div className="col-4">
                <p className=" subtitulo-seccion">Equipos de escritorio para todos los bolsillos</p>
                <p className="text-end texto-pagos mt-auto">Todos los días <br /> 12 cuotas sin interés <br /> con estas tarjetas:</p>
                <div className="text-end" style={{paddingRight:'50px', paddingBottom:'30px'}}><img src={metodoPago} alt="" /></div>
                </div>

                <div className="col-8 contenedor-items pb-4">
                   
                    <Carousel>
                    <Carousel.Item interval={2500}>
                    <div className="row">
                        <div className="col-4">
                            <img src={compu2} alt="" className="img-fluid"/>
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
                        <div className="col-4">
                        <img src={compu1} alt="" className="img-fluid"/>
                            <p className="titulo-producto">Todo-en-Uno-HP ProOne 400</p>
                            <ul className="detalle-producto">
                                <li>Procesador AMD Ryzen™ 3</li>
                                <li>Windows 10 Home 64</li>
                                <li>4 GB de SDRAM DDR4-2400 (1 x 4 GB)</li>
                                <li>Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB</li>
                                <li>Gráficos AMD Radeon™</li>
                            </ul>
                            <div className="">
                            <span className="precio-producto">$86.000</span>
                            <span> <button className="btn-heart"> <i class="fas fa-heart"></i></button></span>
                            <span> <button className="btn-cart"> <i class="fas fa-shopping-cart"></i></button></span>
                            <button className="btn-comprar mt-2" >Comprar</button>
                            </div>
                            
                        </div>
                        <div className="col-4">
                        <img src={compu3} alt="" className="img-fluid"/>
                            <p className="titulo-producto">Desktop HP 280 G4 </p>
                            <ul className="detalle-producto">
                                <li>Procesador AMD Ryzen™ 3</li>
                                <li>Windows 10 Home 64</li>
                                <li>4 GB de SDRAM DDR4-2400 (1 x 4 GB)</li>
                                <li>Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB</li>
                                <li>Gráficos AMD Radeon™</li>
                            </ul>
                            <span className="precio-producto">$124.000</span>
                            <span> <button className="btn-heart"> <i class="fas fa-heart"></i></button></span>
                            <span> <button className="btn-cart"> <i class="fas fa-shopping-cart"></i></button></span>
                            <button className="btn-comprar mt-2" >Comprar</button>
                        </div>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item interval={2500}>
                    <div className="row">
                        <div className="col-4">
                            <img src={compu1} alt="" className="img-fluid"/>
                            <p className="titulo-producto">Estación de trabajo HP Z2 Mini G4</p>
                            <ul className="detalle-producto">
                                <li>Procesador AMD Ryzen™ 3</li>
                                <li>Windows 10 Home 64</li>
                                <li>4 GB de SDRAM DDR4-2400 (1 x 4 GB)</li>
                                <li>Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB</li>
                                <li>Gráficos AMD Radeon™</li>
                            </ul>
                            <span className="precio-producto">$72.000</span>
                            <span> <button className="btn-heart"> <i class="fas fa-heart"></i></button></span>
                            <span> <button className="btn-cart"> <i class="fas fa-shopping-cart"></i></button></span>
                            <button className="btn-comprar mt-2" >Comprar</button>
                        </div>
                        <div className="col-4">
                        <img src={compu2} alt="" className="img-fluid"/>
                            <p className="titulo-producto">Todo-en-Uno-HP ProOne 400</p>
                            <ul className="detalle-producto">
                                <li>Procesador AMD Ryzen™ 3</li>
                                <li>Windows 10 Home 64</li>
                                <li>4 GB de SDRAM DDR4-2400 (1 x 4 GB)</li>
                                <li>Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB</li>
                                <li>Gráficos AMD Radeon™</li>
                            </ul>
                            <div className="">
                            <span className="precio-producto">$49.900</span>
                            <span> <button className="btn-heart"> <i class="fas fa-heart"></i></button></span>
                            <span> <button className="btn-cart"> <i class="fas fa-shopping-cart"></i></button></span>
                            <button className="btn-comprar mt-2" >Comprar</button>
                            </div>
                            
                        </div>
                        <div className="col-4">
                        <img src={compu3} alt="" className="img-fluid"/>
                            <p className="titulo-producto">Desktop HP 280 G4 </p>
                            <ul className="detalle-producto">
                                <li>Procesador AMD Ryzen™ 3</li>
                                <li>Windows 10 Home 64</li>
                                <li>4 GB de SDRAM DDR4-2400 (1 x 4 GB)</li>
                                <li>Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB</li>
                                <li>Gráficos AMD Radeon™</li>
                            </ul>
                            <span className="precio-producto">$156.000</span>
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

export default SeccionCompus
