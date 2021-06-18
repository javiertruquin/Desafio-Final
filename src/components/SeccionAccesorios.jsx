import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
import CardProductoView from "./CardProductoView";

import { useEffect, useState } from "react";
import axios from "axios";


SwiperCore.use([Pagination]);

export default function SeccionAccesorios({ setUser, carrito, filtro }) {
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

    return (
        <div className="container position-relative mt-5">
            <span className="titulo1 ps-4">ACCESORIOS</span>
            <div className="row contenedor-seccion-compus">
                <p className=" subtitulo-seccion2">
                    Complementos ideales para tu SetUp
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
                            <SwiperSlide key={computadora._id}>
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
