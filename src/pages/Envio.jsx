import { React, useState } from "react";
import SeccionCarrito from "../components/SeccionCarrito";
import SeccionEnvio from "../components/SeccionEnvio";
import SeccionTarjetas from "../components/SeccionTarjetas";
import { Redirect } from "react-router-dom";
import { Form, Modal } from "react-bootstrap";
import axios from "axios";
const localToken = JSON.parse(localStorage.getItem("token")) || "";

export default function Envio({ setUser, user }) {
  const [validated, setValidated] = useState(false);
  const [token, setToken] = useState(localToken);
  const [domicilio, setDatosDomicilio] = useState({});
  const [datosTarjeta, setDatosTarjeta] = useState();
  const [carrito, setCarrito] = useState(user.carrito);
  const [crear, setCrear] = useState(false);
  const handleClose = () => setCrear(false);
  const handleCrear = () => setCrear(true);

  if (!token) {
    alert("No estas logueado");
    return <Redirect to="/" />;
  }

  let total = 0;
  for (let i = 0; i < user.carrito?.length; i++) {
    const element = user.carrito[i];
    total = total + element?.cantidad * element.producto?.precio;
  }
  
  
  const enviarDatos = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setValidated(true);
    if (form.checkValidity() === false) {
        return event.stopPropagation();
      }
            
      const params = {
      total,
      domicilio,
      usuario: user._id,
      carrito: user.carrito,
    };
    
    if (!datosTarjeta?.number) {
      alert("pone la tarjeta");
    } else {
      try {
        axios.post("/venta", params);
        handleCrear();
        alert("Datos de venta recibidos satisfactoriamente");
      } catch (error) {
        console.log("enviarDatos ~ error", error);
      }
    }
  };
  
  // useEffect(() => {
  // }, [])
  
  return (
    <div>
      {/* <NavReactB /> */}
      <Form
        noValidate
        validated={validated}
        onSubmit={enviarDatos}
        className="col-12 col-md-10 mt-2 needs-validation"
        className="form-compra"
      >
        <div className="row mx-auto ">
          <div className="col-12 col-md-6">
            <SeccionEnvio
              datosDomicilio={domicilio}
              setDatosDomicilio={setDatosDomicilio}
            />
          </div>
          <div className="col-12 col-md-6">
            <SeccionTarjetas
              datosTarjeta={datosTarjeta}
              setDatosTarjeta={setDatosTarjeta}
            />
          </div>
          <div className="form-actions text-center">
            <button className="btn-comprar col-4">Comprar</button>
          </div>
        </div>
      </Form>
      <Modal
        className="modal-favoritos"
        bsPrefix="modal"
        size="lg"
        show={crear}
        onHide={handleClose}
      >
        <Modal.Body scrollable>
          Venta Concretada
        </Modal.Body>
        {/* <Modal.Footer>
      <Button variant="primary" onClick={handleClose}>
        Cerrar
      </Button>
    </Modal.Footer> */}
      </Modal>
    </div>
  );
}
