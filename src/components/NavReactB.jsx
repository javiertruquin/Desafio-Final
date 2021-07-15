import { React, useState } from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import "../Favoritos.css";
import ModalFavoritos from "../components/ModalFavoritos";

export default function NavReactB({
  logout,
  userName,
  carrito,
  user,
  setUser,
  token,
  productosFavoritos,
  getFavoritos,
}) {
  const [crear, setCrear] = useState(false);
  const handleClose = () => setCrear(false);
  const handleCrear = () => {
    setCrear(true);
    getFavoritos();
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" className="sticky-top">
      <div className="container">
        <Navbar.Brand to="/" as={NavLink} className="">
          <img
            src={logo}
            height="50px"
            className="d-inline-block align-top "
            alt="Logo"
          />
        </Navbar.Brand>
        {userName && (
          <Nav.Link
            to="/carrito"
            as={NavLink}
            style={{
              position: "absolute",
              right: "100px",
              top: "17px",
              fontSize: "1.3rem",
            }}
            className="d-block d-lg-none"
          >
            <i
              style={{ color: "#00598a" }}
              className="fas fa-shopping-cart pr-2"
            ></i>
            <span className="text-dark">
              {carrito?.length > 0 && "(" + carrito?.length + ")"}
            </span>
          </Nav.Link>
        )}
        {userName && (
          <Nav.Link
            href="#link"
            onClick={handleCrear}
            style={{
              position: "absolute",
              right: "65px",
              top: "17px",
              fontSize: "1.3rem",
            }}
            className="d-block d-lg-none"
          >
            <i style={{ color: "#00598a" }} className="fas fa-heart "></i>
          </Nav.Link>
        )}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ position: "absolute", right: "15px", top: "20px" }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto condensed align-items-center">
            <Nav.Link exact to="/" as={NavLink} href>
              Inicio
            </Nav.Link>
            <Nav.Link to="/computadoras" as={NavLink} href>
              Computadoras
            </Nav.Link>
            <Nav.Link to="/notebooks" as={NavLink} href>
              Notebooks
            </Nav.Link>
            <Nav.Link to="/accesorios" as={NavLink} href>
              Accesorios
            </Nav.Link>
            <Nav.Link to="/nosotros" as={NavLink} href>
              Nosotros
            </Nav.Link>

            <div className="ps-2 d-flex align-items-center">
              {userName && (
                <Nav.Link
                  to="/carrito"
                  as={NavLink}
                  className="d-none d-lg-block"
                >
                  <i
                    style={{ color: "#00598a" }}
                    className="fas fa-shopping-cart pr-2"
                  ></i>
                  {carrito?.length > 0 && "(" + carrito?.length + ")"}
                </Nav.Link>
              )}
              {userName && (
                <Nav.Link
                  href="#link"
                  onClick={handleCrear}
                  className="p-3 d-none d-lg-block"
                >
                  <i style={{ color: "#00598a" }} className="fas fa-heart "></i>
                </Nav.Link>
              )}
              <Dropdown>
                <Dropdown.Toggle
                  variant="info"
                  id="dropdown-menu-align-responsive-1"
                  size="sm"
                >
                  <i
                    style={{ color: "#FFFFFF" }}
                    className="fas fa-user pe-2"
                  ></i>
                </Dropdown.Toggle>

                <Dropdown.Menu className="drop-menu">
                  {token && (
                    <p className="pl-2 nombre-usuario-nav">
                      Hola {user.nombre}
                    </p>
                  )}

                  {token && (
                    <p className="pl-2 email-usuario-nav">{user.email}</p>
                  )}
                  {!userName && (
                    <Nav.Link to="/login" as={NavLink} href>
                      Entrar
                    </Nav.Link>
                  )}
                  {!userName && (
                    <Nav.Link to="/registro" as={NavLink} href>
                      Registrarte
                    </Nav.Link>
                  )}
                  {userName && (
                    <Nav.Link to="/profile" as={NavLink} href>
                      Perfil
                    </Nav.Link>
                  )}
                  {userName && (
                    <Nav.Link onClick={logout}>Cerrar Sesión</Nav.Link>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
      <ModalFavoritos
        crear={crear}
        handleClose={handleClose}
        productosFavoritos={productosFavoritos}
        setUser={setUser}
        getFavoritos={getFavoritos}
      />
    </Navbar>
  );
}
