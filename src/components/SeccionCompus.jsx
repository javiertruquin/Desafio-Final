import metodoPago from "../assets/img/metodospago.png"
import compu1 from "../assets/img/compu1.jpeg";
import compu2 from "../assets/img/compu2.jpeg";
import compu3 from "../assets/img/compu3.jpeg";
// slide

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";



// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);




function SeccionCompus() {
    return (
        <div className="container position-relative">
            <span className="titulo1 ps-4">COMPUTADORAS</span>
            <div className="row contenedor-seccion-compus">

                <div className="col-lg-4 col-md-12">
                    <p className=" subtitulo-seccion">Equipos de escritorio para todos los bolsillos</p>
                    <p className="text-end texto-pagos mt-auto">Todos los días <br /> 12 cuotas sin interés <br /> con estas tarjetas:</p>
                    <div className="text-end" style={{ paddingRight: '50px', paddingBottom: '30px' }}><img src={metodoPago} alt="" /></div>
                </div>

                <div className="col-lg-8 col-md-12 contenedor-items pb-4">

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        
                        pagination={{
                            "clickable": true
                        }}
                        breakpoints={{
                            "640": {
                                slidesPerView: 1,
                                spaceBetween: 5
                            },
                            "930": {
                                slidesPerView: 2,
                                spaceBetween: 5
                            },
                            
                            "1151": {
                                slidesPerView: 2,
                                spaceBetween: 5
                            }
                        }}
                        className="mySwiper"
                        navigation={true}
                    >
                        <SwiperSlide>
                            <div className="my-1 p-4">
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
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="my-1 p-4">
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
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="my-1 p-4">
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
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="my-1 p-4">
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
                        </SwiperSlide>

                    </Swiper>

                    {/* <Carousel>
                        <Carousel.Item interval={2500}>
                            <div className="row">
                                <div className="col-4 my-1 p-4">
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
                                <div className="col-4 my-1 p-4">
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
                                <div className="col-4 my-1 p-4">
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
                        
                    </Carousel> */}

                </div>
            </div>

        </div>
    )
}

export default SeccionCompus
