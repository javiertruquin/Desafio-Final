import { Form, Button, FormGroup } from "react-bootstrap";
import { MDBInput } from "mdbreact";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import NavReactB from "../components/NavReactB";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <div>
      <NavReactB />
      <div className="container">
        <div className="row">
          <div className="col-4 text-center p-4 mb-2 titulo-azul">
            <p className="texto-verde-grande">¡Hola!</p>
            <p>Para continuar ingresá tu email y contraseña</p>
          </div>
          <div className="col-8 card my-auto" style={{backgroundColor:'#777777'}}>
            <div className="row align-items-lg-end">
              <div className="col-8 white-text">
                <Form

                  className="pt-2 pr-4 pl-4 mt-4"
                >
                  <Form.Group controlId="formBasicEmail">
                    <MDBInput className="input2" type="email" label="Escribe tu email" rows="2" icon="at" required />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <MDBInput
                      type="password"
                      label="Escribe tu contraseña"
                      rows="2"
                      icon="key"
                      required
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className="col-1"></div>
              <div className="col-3">
              <button

                  type="submit"
                  style={{ width: '100%' }}
                  className="mx-auto mt-4 mb-2 btn-categoria"
                >
                  Entrar
                </button>
                <a
                  href="/" className="mx-auto text-center mb-4"
                >
                 <p> ¿Olvidaste la contraseña?</p>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="row card">
          <div className="col-8 ">
            
              </div>
              <div className="col-6">
                <Button
                  variant="primary"
                  type="submit"
                  style={{ width: '100%' }}
                  className="mx-auto mt-4 mb-2 rounded"
                >
                  Entrar
                </Button>
                <a
                  href="/" className="mx-auto text-center mb-4"
                >
                 <p> ¿Olvidaste la contraseña?</p>
                </a>
                </div>

              <div className="col-4">
              <FormGroup className="mt-5">
                <FormGroup>
                  <p className="text-muted text-right mb-3">
                    Si aún no estás registrado, hacelo{" "}
                    <Nav.Link to="/registro" as={NavLink}>
                      ACÁ
                    </Nav.Link>
                  </p>
                </FormGroup>
              </FormGroup>
            </div>
            </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
