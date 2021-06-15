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

import CardProductoSlide from "./CardProductoSlide";
import { useEffect, useState } from "react";
import axios from "axios";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function SeccionAccesorios({ setUser, carrito }) {
    const [computadoras, setComputadoras] = useState([]);
    useEffect(() => {
        const getComputadoras = async () => {
            const response = await axios.get(`/producto`);
            console.log("getComputadoras ~ response", response);
            setComputadoras(response.data);
        };
        getComputadoras();
    }, []);
    return (
        <div className="container position-relative mt-5">
            <span className="titulo1 ps-4">ACCESORIOS</span>
            <div className="row contenedor-seccion-compus">
                <p className=" subtitulo-seccion2">
                    Equipos de escritorio para todos los bolsillos
                </p>

                <div className="col-12 contenedor-items pb-4">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 5,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 5,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 5,
                            },
                        }}
                        className="mySwiper"
                        navigation={true}
                    >
                        {computadoras.map((computadora) => (
                            <SwiperSlide>
                                <CardProductoView 
                                    setUser={setUser}
                                    computadora={computadora}
                                    carrito={carrito}
                                />
                            </SwiperSlide>
                        ))}
                        {/* <SwiperSlide>
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
                        </SwiperSlide> */}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
