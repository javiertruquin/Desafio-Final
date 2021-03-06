import metodoPago from "../assets/img/metodospago.png";
import { Nav, Button } from "react-bootstrap";
import CardProductoView from "../components/CardProductoView";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
import { useEffect, useState } from "react";
import axios from "axios";

SwiperCore.use([Pagination]);

function SeccionCompus({ setUser, filtro, limite,productosFavoritos,getFavoritos }) {
  const [computadoras, setComputadoras] = useState([]);
  let categoria = filtro;

  const getComputadoras = async () => {
    const params = { categoria, limite };
    const response = await axios.get(`/producto/categoria`, { params });
    setComputadoras(response.data);
  };
  useEffect(() => {
    getComputadoras();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoria]);
  useEffect(() => {
    getComputadoras();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container position-relative mt-5">
      <Nav.Link className="p-0" exact to={"/" + filtro + "s"} as={NavLink}>
        <span className="titulo1 ps-4 text-uppercase">{filtro}s</span>
      </Nav.Link>
      <div className="row contenedor-seccion-compus">
        <div className="col-lg-4 col-md-12">
          <p className=" subtitulo-seccion">
            {categoria === "computadora" &&
              "Equipos de escritorio para todos los bolsillos"}
            {categoria === "notebook" && "Notebooks de alto rendimiento y gran potencia"}
          </p>
          <div className="row">
            <div className="col-lg-12 col-md-6 col-12">
              <p className="text-end texto-pagos mt-lg-5 mt-md-2">
                Todos los días 12 cuotas sin interés con estas tarjetas:
              </p>
            </div>
            <div className="col-lg-12 col-md-6 col-12">
              <div
                className="text-end"
                style={{ paddingRight: "50px", paddingBottom: "30px" }}
              >
                <img src={metodoPago} alt="" />
              </div>
            </div>
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
              <SwiperSlide key={computadora._id}>
                <CardProductoView
                  setUser={setUser}
                  computadora={computadora}
                  productosFavoritos={productosFavoritos}
                  getFavoritos={getFavoritos}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="boton-categorias">
            <Nav.Link to={"/" + categoria + "s"} as={NavLink}>
              <Button variant="info">Ver todas las {categoria}s</Button>
            </Nav.Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeccionCompus;
