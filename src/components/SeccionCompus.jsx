import metodoPago from "../assets/img/metodospago.png"
// import compu1 from "../assets/img/compu1.jpeg";
// import compu2 from "../assets/img/compu2.jpeg";
// import compu3 from "../assets/img/compu3.jpeg";
// slide

import CardProductoSlide from "../components/CardProductoSlide"

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
        <div className="container position-relative mt-5">
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
                            <CardProductoSlide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardProductoSlide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardProductoSlide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardProductoSlide />
                        </SwiperSlide>

                    </Swiper>

                </div>
            </div>

        </div>
    )
}

export default SeccionCompus
