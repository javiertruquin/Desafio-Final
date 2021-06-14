import { MDBCol, MDBContainer, MDBInput, MDBRow } from "mdbreact";
import { Form } from "react-bootstrap";

export default function CajaDeMensajes() {
  return (
    <div>
      <div className="row">
        <hr className=" mt-5" style={{ border: ".3px solid #e2e2e2" }} />
        <div className="col-lg-12 text-center mt-4">
          <span className="titulo-nosotros">Comunicate con nosotros</span>
        </div>
      </div>
      <div className="col d-flex justify-content-center mt-2">
        <span className="sub-mision w-75 text-center">
          {" "}
          Dejános tu mensaje y nos comunicaremos con vos a la brevedad. También
          te dejamos la dirección y horarios de la sucursal si querés acercarte
          personalmente.
        </span>
      </div>

      <div className="col">
        <Form
          style={{ maxWidth: "777px" }}
          className="container card mx-auto pt-2 pr-4 pl-4 mt-5 fuente"
        >
          <MDBContainer className="mb-4">
            <MDBRow>
              <MDBCol>
                <MDBInput type="text" label="Tu Nombre" />
              </MDBCol>
              <MDBCol>
                <MDBInput type="email" label="Tu Email" />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <MDBInput type="text" label="Título Consulta" />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <MDBInput
                  className="mt-3"
                  type="textarea"
                  label="Dejános Tu Consulta"
                  rows="6"
                />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <button
            type="submit"
            style={{ width: "40%" }}
            className="mx-auto mt-4 mb-5 btn-categoria"
          >
            ENVÍA TU CONSULTA
          </button>
        </Form>
      </div>
    </div>
  );
}
