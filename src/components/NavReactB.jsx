import { React, useEffect, useState } from "react";
import { Navbar, Nav, Modal, Button, Dropdown } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import CardFavoritos from "./CardFavoritos";
import "../Favoritos.css";


export default function NavReactB({ logout, userName , carrito }) {
  const [crear, setCrear] = useState(false);

  const handleClose = () => setCrear(false);
  const handleCrear = () => setCrear(true);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" className="sticky-top">
      <div className="container">
        <Navbar.Brand to="/" as={NavLink} className="px-4">
          <img
            src={logo}
            height="50px"
            className="d-inline-block align-top "
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto condensed">
            <Nav.Link to="/" as={NavLink}>
              Inicio
            </Nav.Link>
            <Nav.Link to="/computadoras" as={NavLink}>
              Computadoras
            </Nav.Link>
            <Nav.Link to="/notebooks" as={NavLink}>
              Notebooks
            </Nav.Link>
            <Nav.Link to="/accesorios" as={NavLink}>
              Accesorios
            </Nav.Link>
            <Nav.Link to="/nosotros" as={NavLink}>
              <span className="">Nosotros</span>
            </Nav.Link>
            {/* <Nav.Link to="/usuarios" as={NavLink}>
              Admin
            </Nav.Link> */}
            <div className="ps-5 d-flex">
              <Nav.Link to="/carrito" as={NavLink}>
                <i
                  style={{ color: "#00598a" }}
                  class="fas fa-shopping-cart"
                ></i>
                {carrito?.length}
              </Nav.Link>
              <Nav.Link href="#link" onClick={handleCrear}>
                <i style={{ color: "#00598a" }} class="fas fa-heart"></i>
              </Nav.Link>
              {/* <Button onClick={logout}>
                <i style={{ color: "#00598a" }} class="fas fa-dor"></i>
              </Button> */}
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                <i style={{ color: "#00598a" }} class="fas fa-user"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {!userName && (
                    <Nav.Link to="/login" as={NavLink}>
                      Entrar
                    </Nav.Link>
                  )}
                  {!userName && (
                    <Nav.Link to="/registro" as={NavLink}>
                      Registrarte
                    </Nav.Link>
                  )}
                  {userName && (
                    <Nav.Link to="/registro" as={NavLink}>
                      Perfil
                    </Nav.Link>
                  )}
                  {userName && (
                    <Nav.Link onClick={logout}>
                      Cerrar Sesión
                    </Nav.Link>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
      {/* Modal's */}
      <Modal
        className="modal-favoritos"
        bsPrefix="modal"
        size="lg"
        show={crear}
        onHide={handleClose}
      >
        <Modal.Body scrollable>
          <span>No te quedés con las ganas</span>
          <p>Los favoritos pueden ser tuyos ya!</p>
          <CardFavoritos />
          <CardFavoritos />
          <CardFavoritos />
          <CardFavoritos />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer> */}
      </Modal>
    </Navbar>
  );
}
