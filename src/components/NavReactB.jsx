import { React, useEffect, useState } from "react";
import { Navbar, Nav, Modal, Dropdown } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import CardFavoritos from "./CardFavoritos";
import "../Favoritos.css";
import axios from "axios";

export default function NavReactB({
  logout,
  userName,
  carrito,
  user,
  setUser,
  token,
}) {
  const [crear, setCrear] = useState(false);
  const handleClose = () => setCrear(false);
  const handleCrear = () => {
    setCrear(true);
    getFavoritos();
  };
  const [productosFavoritos, setProductosFavoritos] = useState([]);

  const getFavoritos = async () => {
    try {
      const _id = user._id;
      const response = await axios.get("/auth/favoritos/", { id: _id });
      setProductosFavoritos(response.data.favoritos);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
      getFavoritos();
  }, [])

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
          <Nav className="ml-auto condensed align-items-center">
            <Nav.Link exact to="/" as={NavLink}>
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
              Nosotros
            </Nav.Link>

            <div className="ps-2 d-flex align-items-center">
              {userName && (
                <Nav.Link to="/carrito" as={NavLink}>
                  <i
                    style={{ color: "#00598a" }}
                    className="fas fa-shopping-cart pr-2"
                  ></i>
                  { carrito?.length > 0 && "(" + carrito?.length + ")" }
                </Nav.Link>
              )}
              {userName && (
                <Nav.Link href="#link" onClick={handleCrear} className="p-3">
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
                { token && <p className="pl-2 nombre-usuario-nav">Hola {user.nombre}</p>}
                { token && <p className="pl-2 email-usuario-nav">{user.email}</p>}                
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
                    <Nav.Link to="/profile" as={NavLink}>
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
      {/* Modal's */}
      <Modal
        className="modal-favoritos"
        bsPrefix="modal"
        size="lg"
        show={crear}
        onHide={handleClose}
      >
        <Modal.Body scrollable>
          <div className="row">
            <div className="col-7">
              <span className="titulo-azul">No te quedés con las ganas</span>
              <p className="ps-lg-3 pt-3 pt-lg-0 texto-favoritos fuente">
                Los favoritos pueden ser tuyos ya!
              </p>
            </div>
            <div className="col-2"></div>
            <div className="col-2 text-center pt-3">
              <i
                style={{ color: "#00598a", fontSize: "22pt" }}
                className="fas fa-heart text-center "
              ></i>
              <p className="sub-mision pt-1" style={{ "font-size": "70%" }}>
                FAVORITOS
              </p>
            </div>
          </div>

          <hr className=" mt-4" style={{ border: "0.3px solid #ababab" }} />
          {productosFavoritos?.map((favorito) => (
            <CardFavoritos
              getFavoritos={getFavoritos}
              setUser={setUser}
              favorito={favorito}
            />
          ))}
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
