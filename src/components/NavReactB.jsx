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
        <Navbar.Brand to="/" as={NavLink} className="">
          <img
            src={logo}
            height="50px"
            className="d-inline-block align-top "
            alt="Logo"
          />
        </Navbar.Brand>
        {userName && (
                <Nav.Link to="/carrito" as={NavLink} style={{ position: 'absolute' , right: '100px', top: '17px', fontSize: '1.3rem' }}  className="d-block d-lg-none">
                  <i
                    style={{ color: "#00598a" }}
                    className="fas fa-shopping-cart pr-2"
                  ></i>
                  <span className="text-dark">{ carrito?.length > 0 && "(" + carrito?.length + ")" }</span>
                </Nav.Link>
              )}
              {userName && (
                <Nav.Link href="#link" onClick={handleCrear} style={{ position: 'absolute' , right: '65px', top: '17px', fontSize: '1.3rem' }}  className="d-block d-lg-none">
                  <i style={{ color: "#00598a" }} className="fas fa-heart "></i>
                </Nav.Link>
              )}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ position: 'absolute' , right: '15px', top: '20px' }} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto condensed align-items-center">
            <Nav.Link exact to="/"  as={NavLink} href>
              Inicio
            </Nav.Link>
            <Nav.Link to="/computadoras"  as={NavLink} href>
              Computadoras
            </Nav.Link>
            <Nav.Link to="/notebooks"  as={NavLink} href>
              Notebooks
            </Nav.Link>
            <Nav.Link to="/accesorios"  as={NavLink} href>
              Accesorios
            </Nav.Link>
            <Nav.Link to="/nosotros"  as={NavLink} href>
              Nosotros
            </Nav.Link>

            <div className="ps-2 d-flex align-items-center">
              {userName && (
                <Nav.Link to="/carrito" as={NavLink} className="d-none d-lg-block">
                  <i
                    style={{ color: "#00598a" }}
                    className="fas fa-shopping-cart pr-2"
                  ></i>
                  { carrito?.length > 0 && "(" + carrito?.length + ")" }
                </Nav.Link>
              )}
              {userName && (
                <Nav.Link href="#link" onClick={handleCrear} className="p-3 d-none d-lg-block">
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
      {/* Modal's */}
      <Modal
        className="modal-favoritos"
        bsPrefix="modal"
        size="lg"
        show={crear}
        onHide={handleClose}
      >
        <Modal.Body scrollable="true">
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
                style={{ color: "#00598a", fontSize: '22pt' }}
                className="fas fa-heart text-center "
              ></i>
              <p className="sub-mision pt-1" style={{ fontSize: '70%' }}>
                FAVORITOS
              </p>
            </div>
          </div>

          <hr className=" mt-4" style={{ border: '0.3px solid #ababab' }} />
          {productosFavoritos?.map((favorito) => (
            <CardFavoritos
              handleClose={handleClose}
              key={favorito._id}
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
