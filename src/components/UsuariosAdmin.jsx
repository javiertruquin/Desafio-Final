import { React, useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import FormCrearVendedor from "./FormCrearVendedor";

export default function UsuariosAdmin() {

  const [crear, setCrear  ] = useState(false);

  const handleClose = () => setCrear  (false);
  const handleCrear = () => setCrear  (true);

  return (
    <>
      <Container>
        <div className="text-center py-5">
          <Button className="py-3 px-5" onClick={handleCrear} variant="secondary">
            Agregar Vendedor
          </Button>{" "}
        </div>
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Ultima Publicación</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Tomás</td>
              <td>tomas@rolling.com</td>
              <td>16/05/21 - 17:55</td>
              <td>
                <Button variant="primary">
                  <i class="fas fa-info-circle"></i>
                </Button>{" "}
                <Button onClick={handleCrear} className="my-1" variant="secondary">
                  <i class="far fa-edit"></i>
                </Button>{" "}
                <Button variant="danger">
                  <i class="far fa-trash-alt"></i>
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Tomás</td>
              <td>tomas@rolling.com</td>
              <td>16/05/21 - 17:55</td>
              <td>
                <Button variant="primary">
                  <i class="fas fa-info-circle"></i>
                </Button>{" "}
                <Button onClick={handleCrear} className="my-1" variant="secondary">
                  <i class="far fa-edit"></i>
                </Button>{" "}
                <Button variant="danger">
                  <i class="far fa-trash-alt"></i>
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Tomás</td>
              <td>tomas@rolling.com</td>
              <td>16/05/21 - 17:55</td>
              <td>
                <Button variant="primary">
                  <i class="fas fa-info-circle"></i>
                </Button>{" "}
                <Button onClick={handleCrear} className="my-1" variant="secondary">
                  <i class="far fa-edit"></i>
                </Button>{" "}
                <Button variant="danger">
                  <i class="far fa-trash-alt"></i>
                </Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>

      {/* Modal's */}
      <Modal show={crear} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormCrearVendedor />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
