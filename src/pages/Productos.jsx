// import compu2 from "../assets/img/compu2.jpeg"
import SeccionEnviosPagos from "../components/SeccionEnviosPagos";
import CardProductoView from "../components/CardProductoView";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import SlideAccesorios from "../components/SlideAccesorios";
import SlideComputadoras from "../components/SlideComputadoras";
import SlideNotebooks from "../components/SlideNotebooks";


// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

export default function Productos({ user, setUser, carrito, categoriaFiltrada }) {


    const [computadoras, setComputadoras] = useState([]);
    const [categoria, setCategoria] = useState(categoriaFiltrada);
    let location = useLocation();

    const getComputadoras = async () => {
        const params = { categoria };
        const response = await axios.get(`/producto/categoria`, { params });
        setComputadoras(response.data);
    };
    useEffect(() => {
        getComputadoras();
    }, [categoria]);

    useEffect(() => {
        location.pathname === "/computadoras" &&
            setCategoria(categoriaFiltrada);
        location.pathname === "/notebooks" && setCategoria(categoriaFiltrada);
        location.pathname === "/accesorios" && setCategoria(categoriaFiltrada);
    }, [location]);


    return (
        <div className="container ">
            {categoriaFiltrada === "computadora" && (
                <SlideComputadoras className="mt-4" />
            )}
            {categoriaFiltrada === "notebook" && (
                <SlideNotebooks className="mt-4" />
            )}
            {categoriaFiltrada === "accesorio" && (
                <SlideAccesorios className="mt-4" />
            )}

            <div className="ps-4 mt-5 position-relative">
                <span className="titulo2 position-absolute text-uppercase">
                    {categoriaFiltrada}s
                </span>
            </div>
            <div className="row contenedor-seccion-compus">
                <p className=" subtitulo-seccion2">
                    { categoria === 'computadora' &&
                        'Equipos de escritorio para todos los bolsillos'
                     }
                    { categoria === 'notebook' &&
                        'Notebooks de alto rendimiento y gran potencia'
                     }
                    { categoria === 'accesorio' &&
                        'Complementos ideales para tu SetUp'
                     }
                </p>

                <div className="col-12 contenedor-items pb-4">
                    {/* <BuscadorCategorias /> */}
                    <div className="row">
                        {computadoras.map((computadora, index) => (
                            <div key={index} className="col-sm-12 col-lg-6 col-xl-4">
                                <CardProductoView
                                    setUser={setUser}
                                    // key={index}
                                    user={user}
                                    computadora={computadora}
                                    carrito={carrito}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <SeccionEnviosPagos />
        </div>
    );
}
