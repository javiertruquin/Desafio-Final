import { React, useEffect, useState } from "react";
import {
    Button,
    Container,
    Modal,
    DropdownButton,
    Dropdown,
} from "react-bootstrap";
import CardProductoAdmin from "./CardProductoAdmin";
import FormEditar from "./FormEditar";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";

export default function ProductosAdmin({ user }) {
    const localToken = JSON.parse(localStorage.getItem("token")) || "";
    const [token, setToken] = useState(localToken);
    const [crear, setCrear] = useState(false);
    const [productos, setProductos] = useState([]);
    const [categoria, setCategoria] = useState("todos");
    const [habilitado, setHabilitado] = useState("");
    const [params, setParams] = useState("todos");

    const handleClose = () => setCrear(false);
    const handleCrear = () => setCrear(true);

    const getProductos = async () => {
        if (params === "todos") {
            const response = await axios.get(`/producto`);
            setProductos(response.data);
        } else {
            const response = await axios.get(`/producto/filter`, { params });
            setProductos(response.data);
        }
    };
    useEffect(() => {
        getProductos();
    }, []);

    const handleSelect = (eventKey) => {
        // setRol(eventKey)
        if (eventKey === "1") {
            setParams("todos");
        }
        if (eventKey === "2") {
            setParams({ categoria: "computadora" });
        }
        if (eventKey === "3") {
            setParams({ categoria: "notebook" });
        }
        if (eventKey === "4") {
            setParams({ categoria: "accesorio" });
        }
        if (eventKey === "5") {
            setParams({ habilitado: true });
        }
        if (eventKey === "6") {
            setParams({ habilitado: false });
        }
    };
    useEffect(() => {
        getProductos();
    }, [params]);

    useEffect(() => {
        getProductos();
    }, [habilitado]);

    if (!token) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No estás logueado",
            timer: 1800,
            showConfirmButton: false,
        });
        return <Redirect to="/" />;
    }
    if (user.rol === "usuario") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No podés estar por aquí",
            timer: 1800,
            showConfirmButton: false,
        });
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
                    <DropdownButton
                        onSelect={handleSelect}
                        id="dropdown-basic-button"
                        title="Filtro"
                    >
                        <Dropdown.Item eventKey="1">
                            Todos los productos
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">Computadoras</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Notebook's</Dropdown.Item>
                        <Dropdown.Item eventKey="4">Accesorios</Dropdown.Item>
                        <Dropdown.Item eventKey="5">
                            Productos Habilitados
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="6">
                            Productos Deshabilitados
                        </Dropdown.Item>
                        {/* <Dropdown.Item eventKey="3">Admin y vendedor</Dropdown.Item> */}
                    </DropdownButton>
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
