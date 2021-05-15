import { Form, Button } from "react-bootstrap";
import { MDBInput } from "mdbreact";

export default function Computadoras() {
  return (
    <Form
      style={{ width: "470px" }}
      className="container card mx-auto pt-2 pr-4 pl-4 mt-4"
    >
      <h2 style={{ width: "421px" }} className="mx-auto p-4 text-center mb-2">
        ¡Hola! Para continuar ingresá tu email y contraseña
      </h2>
      <Form.Group controlId="formBasicEmail">
        <MDBInput type="email" label="Escribe tu email" rows="2" icon="at" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <MDBInput
          type="password"
          label="Escribe tu contraseña"
          rows="2"
          icon="key"
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        style={{ width: "300px" }}
        className="mx-auto mt-4 mb-5"
      >
        Entrar
      </Button>
    </Form>
  );
}
