// import { Carousel } from "react-bootstrap";
// import compu1 from "../assets/img/compu1.jpeg"
// import compu2 from "../assets/img/compu2.jpeg"
// import compu3 from "../assets/img/compu3.jpeg"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";



// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";
import CardProductoView from "./CardProductoView";

// install Swiper modules
SwiperCore.use([Pagination]);



export default function SeccionAccesorios() {
    
    return (
        <div className="container position-relative">
            <span className="titulo1 ps-4">ACCESORIOS</span>
            <div className="row contenedor-seccion-compus">
                <p className=" subtitulo-seccion2">Equipos de escritorio para todos los bolsillos</p>


                <div className="col-12 contenedor-items pb-4">

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
                            "768": {
                                slidesPerView: 2,
                                spaceBetween: 5
                            },
                            "1024": {
                                slidesPerView: 4,
                                spaceBetween: 5
                            }
                        }}
                        className="mySwiper"
                        navigation={true}
                    >
                        <SwiperSlide>
                            <CardProductoView />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardProductoView />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardProductoView />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardProductoView />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>

        </div>
    )
}
