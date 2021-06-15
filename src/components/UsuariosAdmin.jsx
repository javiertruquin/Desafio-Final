import axios from "axios";
import { React, useEffect, useState } from "react";
import { Button, Container, Dropdown, DropdownButton, Modal, Table } from "react-bootstrap";
import FormCrearVendedor from "./FormCrearVendedor";
import FilaUsuarios from "./FilaUsuarios";

export default function UsuariosAdmin() {
  const [crear, setCrear] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const handleClose = () => setCrear(false);
  const handleCrear = () => setCrear(true);
  const [rol, setRol] = useState("vendedor");
  const [subNav, setSubNav] = useState('vendedor');


  const handleSelect = (eventKey) => {
    // setRol(eventKey)
    if (eventKey === '1') {
      setRol('admin')
    } if (eventKey === '2') {
      setRol('vendedor')
    } if (eventKey === '3') {
      setRol('usuario')
    } if (eventKey === '4') {
      setRol('todos');
    }
    // } if (eventKey === '3') {
    //   setRol({ rol: 'admin', rol2: 'vendedor' })
    // }
  }
  
  const getUsuarios = async () => {
    const params = { rol };
    if (rol === 'todos') {
    const response = await axios.get(`/auth/usuariosAdmin`);
    setUsuarios(response.data);
    } else {
      const response = await axios.get(`/auth/usuariosFilter`, { params });
      setUsuarios(response.data);
    }  
  };
  useEffect(() => {
    getUsuarios();
  }, [rol]);

  return (
    <>
      <Container className="">
        <div className="row bg-fondo-producto-admin img-fluid">
          <div className="col-lg-6 text-lg-right text-center mt-5">
            <span className="titulo-dash">Click aquí </span>
            <br></br>
            <span className="subtitulo-dash">para crear un vendedor</span>
          </div>
          <div className="col-lg-6  py-5 mt-4 text-center">
            <div className=" mx-5">
              <button onClick={handleCrear} className="btn-dash py-2 px-4">
                <i class="fas fa-plus-square me-3"></i> Agregar vendedor
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
          <p className="titulo-view-dash mt-4">Listado de usuarios</p>
          <p className="subtitulo-view-dash">
            Aqui podés ver el listado completo de usuarios y podes visualizarlo,
            editar o eliminarlo.
          </p>

          <hr className=" mt-4" style={{ border: "1px solid #ababab" }} />
          <DropdownButton activeKey="1" onSelect={handleSelect} id="dropdown-basic-button" title="Filtro por rol">
            <Dropdown.Item eventKey="1">Admin</Dropdown.Item>
            <Dropdown.Item eventKey="2">Vendedor</Dropdown.Item>
            <Dropdown.Item eventKey="3">Usuarios</Dropdown.Item>
            <Dropdown.Item eventKey="4">Todos</Dropdown.Item>
            {/* <Dropdown.Item eventKey="3">Admin y vendedor</Dropdown.Item> */}
          </DropdownButton>
        </div>
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario, index) => (
              <FilaUsuarios getUsuarios={getUsuarios} index={index+1}  usuario={usuario} key={usuario._id} />
            ))}
          </tbody>
        </Table>
      </Container>

      {/* Modal's */}
      <Modal show={crear} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormCrearVendedor
            handleClose={handleClose}
            getUsuarios={getUsuarios}
            accion={"crear"}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
