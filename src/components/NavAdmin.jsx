import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logoW from "../assets/img/logoW.png";

export default function NavAdmin({ logout, userRol, user, token }) {
  const esAdmin = userRol === "admin";

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
              { token && <p className="pl-2 nombre-usuario-nav">Hola {user.nombre}</p>}
              { token && <p className="pl-2 email-usuario-nav">{user.email}</p>}
                <Nav.Link style={{ color: "#000" }} onClick={logout}>
                  Cerrar Sesión
                </Nav.Link>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>

  );
}
