import { Navbar, Nav } from "react-bootstrap";

export default function NavAdmin() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <div className="container justify-content-start">
        {/* <Navbar.Brand href="/home" className="col-1"><Image className="w-100" src={logo} rounded /></Navbar.Brand> */}
        <Nav style={{width: "100%"}} className="text-center" variant="tabs" defaultActiveKey="/home">
          <Nav.Item className="col">
            <Nav.Link href="/productos">Productos</Nav.Link>
          </Nav.Item>
          <Nav.Item className="col">
            <Nav.Link href="/usuarios" eventKey="link-1">Usuarios</Nav.Link>
          </Nav.Item>
          <Nav.Item className="col">
            <Nav.Link href="/estadisticas" eventKey="link-2">Estadísticas</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </Navbar>
  );
}
