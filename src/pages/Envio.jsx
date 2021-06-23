import { React, useState } from "react";
import SeccionCarrito from "../components/SeccionCarrito";
import SeccionEnvio from "../components/SeccionEnvio";
import SeccionTarjetas from "../components/SeccionTarjetas";
import "../Favoritos.css";
import { Redirect, useHistory } from "react-router-dom";
import { Form, Modal } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

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
  let history = useHistory();

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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ingrese los datos de su tarjeta",
        timer: 1800,
        showConfirmButton: false,
    });
    } else {
      try {
        await axios.post("/venta", params);
        handleCrear();
        const response = await axios.put("/usuarios/carrito/resetear", { id: user._id } )
        setUser(response.data)
        // console.log('response', response)
        // alert("Datos de venta recibidos satisfactoriamente");
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
        // className="modal-exitoso"
        bsPrefix="modal"
        size="md"
        show={crear}
        onHide={handleClose}
      >
        <Modal.Body scrollable
        style={{ backgroundColor: '#ababab', boxShadow: 'none' }}
        >
        <div className="modal-dialog modal-confirm">
                <div className="modal-content fuente">
                    <div className="modal-header">
                        <div className="icon-box">
                            <i class="fas fa-check"></i>
                        </div>
                        <h4 className="modal-title w-100">Venta exitosa!</h4>
                    </div>
                    <div className="modal-body">
                        <p className="text-center">
                            Revisa tu email, te enviaremos por ahí la información de tu compra.
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button
                            className="btn btn-success btn-block"
                            data-dismiss="modal"
                            onClick={() => history.push("/")}
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
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
