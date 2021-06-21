import { useState, useEffect } from "react";
import { Navbar, Nav, Dropdown, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logoW from "../assets/img/logoW.png";

export default function NavAdmin({ logout, userRol, user, token }) {
  const [usuario, setNombre] = useState(user);
  const esAdmin = userRol === "admin";

  // useEffect(() => {
  //   setNombre(userName)
  // }, [])

  // console.log('nombre', nombre)

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="sticky-top"
    >
      <div className="container">
        <Navbar.Brand className="px-4">
          <img
            src={logoW}
            height="50px"
            className="d-inline-block align-top "
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto condensed">
            <Nav.Item className="col">
              <Nav.Link to="/productos" as={NavLink}>
                Productos
              </Nav.Link>
            </Nav.Item>
            {esAdmin && (
              <Nav.Item className="col">
                <Nav.Link to="/usuarios" as={NavLink}>
                  Usuarios
                </Nav.Link>
              </Nav.Item>
            )}
            <Nav.Item className="col">
              <Nav.Link to="/mensaje" as={NavLink}>
                Mensajes
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="col">
              <Nav.Link to="/ventas" as={NavLink}>
                Ventas
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="col">
              <Nav.Link to="/estadisticas" as={NavLink}>
                Estadísticas
              </Nav.Link>
            </Nav.Item>

            <Dropdown>
              <Dropdown.Toggle
                variant="info"
                size="sm"
                id="dropdown-basic"
              >
                <i
                  style={{ color: "#00598a" }}
                  className="fas fa-user pr-2"
                ></i>
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop-menu">
              { token && <p className="pl-2 nombre-usuario-nav">Hola {usuario.nombre}</p>}
              { token && <p className="pl-2 email-usuario-nav">Hola {usuario.nombre}</p>}
                <Nav.Link style={{ color: "#000" }} onClick={logout}>
                  Cerrar Sesión
                </Nav.Link>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>

    // <Navbar fixed="top" bg="dark" variant="dark">
    //   <div className="container justify-content-start">
    //     {/* <Navbar.Brand to="/home" className="col-1"><Image className="w-100" src={logo} rounded /></Navbar.Brand> */}
    //     <Nav style={{width: "100%"}} className="text-center" variant="tabs" defaultActiveKey="/home">
    //       <Nav.Item className="col">
    //         <Nav.Link to="/productos">Productos</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item className="col">
    //         <Nav.Link to="/usuarios" eventKey="link-1">Usuarios</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item className="col">
    //         <Nav.Link to="/estadisticas" eventKey="link-2">Estadísticas</Nav.Link>
    //       </Nav.Item>
    //     </Nav>
    //   </div>
    // </Navbar>
  );
}
