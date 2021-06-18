import { React, useEffect, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import CardProductoAdmin from "./CardProductoAdmin";
import FormEditar from "./FormEditar";
import Footer from "../components/Footer";
import axios from "axios";
import { Redirect } from "react-router-dom";


export default function ProductosAdmin({ token }) {
    const localToken = JSON.parse(localStorage.getItem("token")) || "";
    const [token2, setToken2] = useState(localToken);
    const [crear, setCrear] = useState(false);
    const [productos, setProductos] = useState([]);

    const handleClose = () => setCrear(false);
    const handleCrear = () => setCrear(true);

    const getProductos = async () => {
        console.log("header", axios.defaults.headers);
        const response = await axios.get(`/producto`);
        setProductos(response.data);
    };
    useEffect(() => {
        getProductos();
    }, []);
    if (!token2) {
        alert("No estas logueado");
        return <Redirect to="/" />;
    }
    return (
        <div>
            <Container className="">
                <div className="row bg-fondo-producto-admin img-fluid">
                    <div className="col-lg-6 text-lg-right text-center mt-5">
                        <span className="titulo-dash">Click aquí </span>
                        <br></br>
                        <span className="subtitulo-dash">
                            para crear un producto
                        </span>
                    </div>
                    <div className="col-lg-6  py-5 mt-4 text-center">
                        <div className=" mx-5">
                            <button
                                onClick={handleCrear}
                                className="btn-dash py-2 px-4"
                            >
                                <i className="fas fa-plus-square me-3"></i>
                                Agregar producto
                            </button>
                        </div>

                        {/* <Button
              className="py-3 px-5"
              variant="secondary"
              onClick={handleCrear}
            >
              Agregar Producto
          </Button>{" "} */}
                    </div>
                </div>
                <div className="">
                    <p className="titulo-view-dash mt-4">
                        Listado de productos
                    </p>
                    <p className="subtitulo-view-dash">
                        Aqui podés ver el listado completo de productos y podes
                        visualizarlo, editar o eliminarlo.
                    </p>

                    <hr
                        className=" mt-4"
                        style={{ border: "1px solid #ababab" }}
                    />
                </div>
                <div className=" mt-4">
                    {productos.map((producto) => (
                        <CardProductoAdmin
                            getProductos={getProductos}
                            key={producto._id}
                            producto={producto}
                        />
                    ))}
                </div>
            </Container>

            {/* <Footer /> */}

            {/* Modal's */}
            <Modal show={crear} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormEditar getProductos={getProductos} accion={"crear"} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
