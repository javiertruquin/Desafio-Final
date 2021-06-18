import metodoPago from "../assets/img/metodospago.png";

import CardProductoView from "../components/CardProductoView";


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";
import { useEffect, useState } from "react";
import axios from "axios";

// install Swiper modules
SwiperCore.use([Pagination]);

function SeccionCompus({ setUser, carrito, filtro }) {
    const [computadoras, setComputadoras] = useState([]);
    const [categoria, setCategoria] = useState(filtro);

    const getComputadoras = async () => {
        const params = { categoria };
        const response = await axios.get(`/producto/categoria`, { params });
        setComputadoras(response.data);
    };
    useEffect(() => {
        getComputadoras();
    }, [categoria]);

    // useEffect(() => {
    //     const getComputadoras = async () => {
    //         const response = await axios.get(`/producto`);
    //         console.log("getComputadoras ~ response", response);
    //         setComputadoras(response.data);
    //     };
    //     getComputadoras();
    // }, []);
    return (
        <div className="container position-relative mt-5">
            <span className="titulo1 ps-4 text-uppercase">{filtro}s</span>
            <div className="row contenedor-seccion-compus">
                <div className="col-lg-4 col-md-12">
                    <p className=" subtitulo-seccion">
                        Equipos de escritorio para todos los bolsillos
                    </p>
                    <p className="text-end texto-pagos mt-auto">
                        Todos los días <br /> 12 cuotas sin interés <br /> con
                        estas tarjetas:
                    </p>
                    <div
                        className="text-end"
                        style={{ paddingRight: "50px", paddingBottom: "30px" }}
                    >
                        <img src={metodoPago} alt="" />
                    </div>
                </div>

                <div className="col-lg-8 col-md-12 contenedor-items pb-4">
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
                            930: {
                                slidesPerView: 2,
                                spaceBetween: 5,
                            },

                            1151: {
                                slidesPerView: 2,
                                spaceBetween: 5,
                            },
                        }}
                        className="mySwiper"
                        navigation={true}
                    >
                        {computadoras.map((computadora) => (
                            <SwiperSlide key={computadora._id} >
                                <CardProductoView
                                    setUser={setUser}
                                    computadora={computadora}
                                    carrito={carrito}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default SeccionCompus;
