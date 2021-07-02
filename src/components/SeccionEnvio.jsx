import axios from "axios";
import { MDBInput } from "mdbreact";
import { React, useEffect, useState } from "react";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

export default function SeccionEnvio({
  datosDomicilio,
  setDatosDomicilio,
  user,
}) {
  const [validated, setValidated] = useState(false);
  let history = useHistory();
  const [DomicilioCompleto, setDomicilioCompleto] = useState();
  const [domicilio, setDomicilio] = useState(user.domicilio);
  const [telefono, setTelefono] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let changedInput = { ...datosDomicilio, [name]: value };
    setDatosDomicilio({ ...changedInput });
  };

  const getUsuario = async () => {
    const response = await axios.get("/auth");
    setTelefono(response.data.telefono);
    setDomicilio(response.data.domicilio);
  };
  useEffect(() => {
    getUsuario();
  }, []);

  const llenarDireccion = (dom) => {
    let domicilioInd = {};
    domicilioInd.provincia = dom.provincia;
    domicilioInd.localidad = dom.localidad;
    domicilioInd.calle = dom.calle;
    domicilioInd.numero = dom.numero;
    domicilioInd.departamento = dom.departamento;
    domicilioInd.codPostal = dom.codPostal;
    domicilioInd.indicaciones = dom.indicaciones;
    setDomicilioCompleto(domicilioInd);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-7">
          <span className="titulo-azul">Dirección</span>
          <p className="ps-lg-3 pt-3 pt-lg-0 texto-favoritos fuente">
            Ingresá la dirección donde queres el envío
          </p>
        </div>
        <div className="col-2"></div>
        <div className="col-2 text-center pt-3">
          <i
            style={{ color: "#00598a", fontSize: "22pt" }}
            className="fas fa-home text-center "
          ></i>
          <p className="sub-mision pt-1" style={{ fontSize: "70%" }}>
            DIRECCIÓN
          </p>
        </div>
      </div>
      <hr className=" mt-3" style={{ border: "0.3px solid #ababab" }} />
      {/* <Form
                noValidate
                validated={validated}
                onSubmit={enviarDatos}
                className="col-12 col-md-10 mt-2 needs-validation"
            > */}
      <div className="d-flex">
        <DropdownButton
          size="sm"
          id="dropdown-basic-button"
          title="Mis direcciones"
        >
          {domicilio?.map((dom, index) => (
            <Dropdown.Item
              key={index}
              value={index + 1}
              onClick={() => llenarDireccion(dom)}
            >
              {dom.titulo}
            </Dropdown.Item>
          ))}
          {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item> */}
          {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
        </DropdownButton>
        <Button to="/profile" size="sm" as={Link} variant="info">
          <i className="far fa-edit"></i> Editar Direcciones
        </Button>{" "}
        {/* <Button size="sm" variant="info">
            <i className="far fa-edit"></i> Limpiar formulario
          </Button>{" "} */}
      </div>
      <div className="container mb-4">
        <div className="row">
          <div className="col-6">
            <MDBInput
              required
              type="text"
              maxLength="30"
              placeholder="Provincia"
              label="Provincia"
              onChange={(event) => handleInputChange(event)}
              name="provincia"
              value={DomicilioCompleto?.provincia}
            >
              <div className="invalid-feedback">Ingrese su provincia aquí</div>
            </MDBInput>
          </div>
          <div className="col-6">
            <MDBInput
              required
              type="text"
              maxLength="30"
              placeholder="Localidad"
              label="Localidad"
              onChange={(event) => handleInputChange(event)}
              value={DomicilioCompleto?.localidad}
              name="localidad"
            >
              <div className="invalid-feedback">Ingrese su localidad aquí</div>
            </MDBInput>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <MDBInput
              required
              type="text"
              placeholder="Calle"
              maxLength="30"
              value={DomicilioCompleto?.calle}
              label="Calle"
              onChange={(event) => handleInputChange(event)}
              name="calle"
            >
              <div className="invalid-feedback">Ingrese su Calle aquí</div>
            </MDBInput>
          </div>
          <div className="col-6">
            <MDBInput
              type="number"
              min="1"
              max="999999"
              required
              placeholder="Número"
              value={DomicilioCompleto?.numero}
              label="Número"
              onChange={(event) => handleInputChange(event)}
              name="numero"
            >
              <div className="invalid-feedback">Ingrese su Numero aquí</div>
            </MDBInput>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <MDBInput
              placeholder="Depto / Piso"
              value={DomicilioCompleto?.departamento}
              type="text"
              maxLength="5"
              label="Piso / Departamento"
              onChange={(event) => handleInputChange(event)}
              name="piso"
            ></MDBInput>
          </div>
          <div className="col-6">
            <MDBInput
              required
              placeholder="Teléfono"
              type="number"
              min="1111111111"
              max="99999999999999999999"
              valueDefault={user.telefono}
              label="Teléfono (con prefijo)"
              onChange={(event) => handleInputChange(event)}
              name="telefono"
            >
              <div className="invalid-feedback">
                Ingrese su numero de teléfono aquí
              </div>
            </MDBInput>
          </div>
        </div>
        <div className="row">
          <div className="">
            <MDBInput
              type="textarea"
              value={DomicilioCompleto?.indicaciones}
              // value={ DomicilioCompleto?.indicaciones || "" }
              placeholder="Indicaciones adicionales"
              label="Indicaciones adicionales"
              rows="4"
              maxLength="90"
              onChange={(event) => handleInputChange(event)}
              name="observaciones"
            ></MDBInput>
          </div>
        </div>
      </div>
      <div className="text-center mt-2">
        {/* <Nav.Link to="/pago" as={NavLink} className=""> */}
        {/* <button className="btn-comprar" type="submit">
                        Continuar compra
                    </button> */}
        {/* </Nav.Link> */}
      </div>
      {/* </Form> */}
    </div>
  );
}
