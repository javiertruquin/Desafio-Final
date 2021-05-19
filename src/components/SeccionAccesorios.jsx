// import { Carousel } from "react-bootstrap";
import compu1 from "../assets/img/compu1.jpeg"
import compu2 from "../assets/img/compu2.jpeg"
import compu3 from "../assets/img/compu3.jpeg"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export default function SeccionAccesorios() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className="container position-relative">
            <span className="titulo1 ps-4">ACCESORIOS</span>
            <div className="row contenedor-seccion-compus">
                <p className=" subtitulo-seccion2">Equipos de escritorio para todos los bolsillos</p>


                <div className="col-12 contenedor-items pb-4">

                    <Carousel
                        partialVisible={true}
                        responsive={responsive}
                        swipeable={true}
                        draggable={false}
                        showDots={false}
                        ssr={false} // means to render carousel on server-side.
                        infinite={true}
                        autoPlaySpeed={1000}
                        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        // deviceType={this.props.deviceType}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        removeArrowOnDeviceType={["tablet", "mobile", ]}
                        containerClass="carousel-container"
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        <div className="my-1 p-4">
                            <button className="btn-serie">Serie Advance</button>
                            <img src={compu1} alt="" className="img-fluid" />
                            <p className="titulo-producto">Estación de trabajo HP Z2 Mini G4</p>
                            <ul className="detalle-producto">
                                <li>Proce7sador AMD Ryzen™ 3</li>
                                <li>Windows 10 Home 64</li>
                                <li>4 GB de SDRAM DDR4-2400 (1 x 4 GB)</li>
                                <li>Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB</li>
                                <li>Gráficos AMD Radeon™</li>
                            </ul>
                            <span className="precio-producto">$56.000</span>
                            <span> <button className="btn-heart"> <i class="fas fa-heart"></i></button></span>
                            <span> <button className="btn-cart"> <i class="fas fa-shopping-cart"></i></button></span>
                            <button className="btn-comprar mt-2" >Comprar</button>
                        </div>
                        <div className="my-1 p-4">
                            <button className="btn-serie">Serie Advance</button>
                            <img src={compu2} alt="" className="img-fluid" />
                            <p className="titulo-producto">Estación de trabajo HP Z2 Mini G4</p>
                            <ul className="detalle-producto">
                                <li>Proce7sador AMD Ryzen™ 3</li>
                                <li>Windows 10 Home 64</li>
                                <li>4 GB de SDRAM DDR4-2400 (1 x 4 GB)</li>
                                <li>Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB</li>
                                <li>Gráficos AMD Radeon™</li>
                            </ul>
                            <span className="precio-producto">$80.000</span>
                            <span> <button className="btn-heart"> <i class="fas fa-heart"></i></button></span>
                            <span> <button className="btn-cart"> <i class="fas fa-shopping-cart"></i></button></span>
                            <button className="btn-comprar mt-2" >Comprar</button>
                        </div>
                        <div className="my-1 p-4">
                            <button className="btn-serie">Serie Advance</button>
                            <img src={compu3} alt="" className="img-fluid" />
                            <p className="titulo-producto">Estación de trabajo HP Z2 Mini G4</p>
                            <ul className="detalle-producto">
                                <li>Proce7sador AMD Ryzen™ 3</li>
                                <li>Windows 10 Home 64</li>
                                <li>4 GB de SDRAM DDR4-2400 (1 x 4 GB)</li>
                                <li>Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB</li>
                                <li>Gráficos AMD Radeon™</li>
                            </ul>
                            <span className="precio-producto">$120.000</span>
                            <span> <button className="btn-heart"> <i class="fas fa-heart"></i></button></span>
                            <span> <button className="btn-cart"> <i class="fas fa-shopping-cart"></i></button></span>
                            <button className="btn-comprar mt-2" >Comprar</button>
                        </div>
                        <div className="my-1 p-4">
                            <button className="btn-serie">Serie Advance</button>
                            <img src={compu1} alt="" className="img-fluid" />
                            <p className="titulo-producto">Estación de trabajo HP Z2 Mini G4</p>
                            <ul className="detalle-producto">
                                <li>Proce7sador AMD Ryzen™ 3</li>
                                <li>Windows 10 Home 64</li>
                                <li>4 GB de SDRAM DDR4-2400 (1 x 4 GB)</li>
                                <li>Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB</li>
                                <li>Gráficos AMD Radeon™</li>
                            </ul>
                            <span className="precio-producto">$54.000</span>
                            <span> <button className="btn-heart"> <i class="fas fa-heart"></i></button></span>
                            <span> <button className="btn-cart"> <i class="fas fa-shopping-cart"></i></button></span>
                            <button className="btn-comprar mt-2" >Comprar</button>
                        </div>
                        <div className="my-1 p-4">
                            <button className="btn-serie">Serie Advance</button>
                            <img src={compu3} alt="" className="img-fluid" />
                            <p className="titulo-producto">Estación de trabajo HP Z2 Mini G4</p>
                            <ul className="detalle-producto">
                                <li>Proces6ador AMD Ryzen™ 3</li>
                                <li>Windows 10 Home 64</li>
                                <li>4 GB de SDRAM DDR4-2400 (1 x 4 GB)</li>
                                <li>Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB</li>
                                <li>Gráficos AMD Radeon™</li>
                            </ul>
                            <span className="precio-producto">$84.000</span>
                            <span> <button className="btn-heart"> <i class="fas fa-heart"></i></button></span>
                            <span> <button className="btn-cart"> <i class="fas fa-shopping-cart"></i></button></span>
                            <button className="btn-comprar mt-2" >Comprar</button>
                        </div>
                        <div className="my-1 p-4">
                            <button className="btn-serie">Serie Advance</button>
                            <img src={compu2} alt="" className="img-fluid" />
                            <p className="titulo-producto">Estación de trabajo HP Z2 Mini G4</p>
                            <ul className="detalle-producto">
                                <li>Procesa5dor AMD Ryzen™ 3</li>
                                <li>Windows 10 Home 64</li>
                                <li>4 GB de SDRAM DDR4-2400 (1 x 4 GB)</li>
                                <li>Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB</li>
                                <li>Gráficos AMD Radeon™</li>
                            </ul>
                            <span className="precio-producto">$94.000</span>
                            <span> <button className="btn-heart"> <i class="fas fa-heart"></i></button></span>
                            <span> <button className="btn-cart"> <i class="fas fa-shopping-cart"></i></button></span>
                            <button className="btn-comprar mt-2" >Comprar</button>
                        </div>
                        <div className="my-1 p-4">
                            <button className="btn-serie">Serie Advance</button>
                            <img src={compu1} alt="" className="img-fluid" />
                            <p className="titulo-producto">Estación de trabajo HP Z2 Mini G4</p>
                            <ul className="detalle-producto">
                                <li>Proces4ador AMD Ryzen™ 3</li>
                                <li>Windows4 10 Home 64</li>
                                <li>4 GB de SDRAM DDR4-2400 (1 x 4 GB)</li>
                                <li>Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB</li>
                                <li>Gráficos AMD Radeon™</li>
                            </ul>
                            <span className="precio-producto">$54.000</span>
                            <span> <button className="btn-heart"> <i class="fas fa-heart"></i></button></span>
                            <span> <button className="btn-cart"> <i class="fas fa-shopping-cart"></i></button></span>
                            <button className="btn-comprar mt-2" >Comprar</button>
                        </div>
                        <div className="my-1 p-4">
                            <button className="btn-serie">Serie Advance</button>
                            <img src={compu2} alt="" className="img-fluid" />
                            <p className="titulo-producto">Estación de trabajo HP Z2 Mini G4</p>
                            <ul className="detalle-producto">
                                <li>Proces3ador AMD Ryzen™ 3</li>
                                <li>Windows 10 Home 64</li>
                                <li>4 GB de SDRAM DDR4-2400 (1 x 4 GB)</li>
                                <li>Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB</li>
                                <li>Gráficos AMD Radeon™</li>
                            </ul>
                            <span className="precio-producto">$134.000</span>
                            <span> <button className="btn-heart"> <i class="fas fa-heart"></i></button></span>
                            <span> <button className="btn-cart"> <i class="fas fa-shopping-cart"></i></button></span>
                            <button className="btn-comprar mt-2" >Comprar</button>
                        </div>
                        <div className="my-1 p-4">
                            <button className="btn-serie">Serie Advance</button>
                            <img src={compu3} alt="" className="img-fluid" />
                            <p className="titulo-producto">Estación de trabajo HP Z2 Mini G4</p>
                            <ul className="detalle-producto">
                                <li>Procesa2dor AMD Ryzen™ 3</li>
                                <li>Windows 10 Home 64</li>
                                <li>4 GB de SDRAM DDR4-2400 (1 x 4 GB)</li>
                                <li>Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB</li>
                                <li>Gráficos AMD Radeon™</li>
                            </ul>
                            <span className="precio-producto">$234.000</span>
                            <span> <button className="btn-heart"> <i class="fas fa-heart"></i></button></span>
                            <span> <button className="btn-cart"> <i class="fas fa-shopping-cart"></i></button></span>
                            <button className="btn-comprar mt-2" >Comprar</button>
                        </div>
                    </Carousel>;

                    {/* <Carousel>
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
                    </Carousel> */}

                </div>
            </div>

        </div>
    )
}
