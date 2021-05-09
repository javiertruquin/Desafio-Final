import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.png'



export default function NavReactB() {
    return (
        <Navbar bg="light">
            <div className="container">
            <Navbar.Brand href="#home" className="px-4">
                <img
                    src={logo}

                    height="50px"
                    className="d-inline-block align-top m-1"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto condensed">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#link">Computadoras</Nav.Link>
                    <Nav.Link href="#link">Notebooks</Nav.Link>
                    <Nav.Link href="#link">Accesorios</Nav.Link>
                    <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
                    <div className="ps-5 d-flex">
                    <Nav.Link href="#link"><i style={{ color:"#00598a" }} class="fas fa-shopping-cart"></i></Nav.Link>
                    <Nav.Link href="#link"><i style={{ color:"#00598a" }} class="fas fa-user"></i></Nav.Link>
                    </div>
                </Nav>

            </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
