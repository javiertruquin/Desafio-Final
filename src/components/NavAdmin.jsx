import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logoW from "../assets/img/logoW.png";

export default function NavAdmin() {
  return (

<Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark" className="sticky-top">
      <div className="container">
        <Navbar.Brand to="/" as={NavLink} className="px-4">
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
            <Nav.Link href="/productos">Productos</Nav.Link>
          </Nav.Item>
          <Nav.Item className="col">
            <Nav.Link href="/usuarios" eventKey="link-1">Usuarios</Nav.Link>
          </Nav.Item>
          <Nav.Item className="col">
            <Nav.Link href="/estadisticas" eventKey="link-2">Estadísticas</Nav.Link>
          </Nav.Item>
            
          <Nav.Item className="col">
              <Nav.Link to="/login" as={NavLink}>
                <i style={{ color: "#00a8db" }} class="fas fa-user"></i>
              </Nav.Link>
              </Nav.Item>

          </Nav>

        </Navbar.Collapse>
      </div>
    </Navbar>

    // <Navbar fixed="top" bg="dark" variant="dark">
    //   <div className="container justify-content-start">
    //     {/* <Navbar.Brand href="/home" className="col-1"><Image className="w-100" src={logo} rounded /></Navbar.Brand> */}
    //     <Nav style={{width: "100%"}} className="text-center" variant="tabs" defaultActiveKey="/home">
    //       <Nav.Item className="col">
    //         <Nav.Link href="/productos">Productos</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item className="col">
    //         <Nav.Link href="/usuarios" eventKey="link-1">Usuarios</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item className="col">
    //         <Nav.Link href="/estadisticas" eventKey="link-2">Estadísticas</Nav.Link>
    //       </Nav.Item>
    //     </Nav>
    //   </div>
    // </Navbar>
  );
}
