import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";

export default function NavReactB() {
  return (
    <Navbar bg="light" className="sticky-top">
      <div className="container">
        <Navbar.Brand to="/inicio" as={NavLink} className="px-4">
          <img
            src={logo}
            height="50px"
            className="d-inline-block align-top "
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto condensed">
            <Nav.Link to="/inicio" as={NavLink}>
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
              Sobre Nosotros
            </Nav.Link>
            <div className="ps-5 d-flex">
              <Nav.Link href="#link">
                <i
                  style={{ color: "#00598a" }}
                  class="fas fa-shopping-cart"
                ></i>
              </Nav.Link>
              <Nav.Link to="/login" as={NavLink}>
                <i style={{ color: "#00598a" }} class="fas fa-user"></i>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
