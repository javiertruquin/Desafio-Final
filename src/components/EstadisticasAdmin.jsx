import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";

export default function EstadisticasAdmin({ user }) {
    const localToken = JSON.parse(localStorage.getItem("token")) || "";
    if (!localToken) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No estás logueado",
            timer: 1800,
            showConfirmButton: false,
        });
        return <Redirect to="/" />;
    }
    if (user.rol === "usuario") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No podés estar por aquí",
            timer: 1800,
            showConfirmButton: false,
        });
        return <Redirect to="/" />;
    }
    return (
        <>
            <Container className="mt-5 py-5">
                <Row>
                    <Col md={4}>
                        <Card className="text-center">
                            <Card.Header>Cantidad de Productos</Card.Header>
                            <Card.Body>
                                {/* <Card.Title>Special title treatment</Card.Title> */}
                                <div className="numeros-estadisticas text-dark">
                                    50
                                </div>
                                <Button href="/productos" variant="primary">
                                    Ver productos
                                </Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                17/05/21 - 16:54
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center">
                            <Card.Header>Productos Vendidos</Card.Header>
                            <Card.Body>
                                {/* <Card.Title>Special title treatment</Card.Title> */}
                                <div className="numeros-estadisticas text-success">
                                    23
                                </div>
                                <Button href="/productos" variant="primary">
                                    Ver listado
                                </Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                17/05/21 - 16:54
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center">
                            <Card.Header>Vendedores</Card.Header>
                            <Card.Body>
                                {/* <Card.Title>Special title treatment</Card.Title> */}
                                <div className="numeros-estadisticas text-dark">
                                    8
                                </div>
                                <Button href="/usuarios" variant="primary">
                                    Ver vendedores
                                </Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                17/05/21 - 16:54
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center">
                            <Card.Header>Visitas</Card.Header>
                            <Card.Body>
                                {/* <Card.Title>Special title treatment</Card.Title> */}
                                <div className="numeros-estadisticas text-danger">
                                    256
                                </div>
                                {/* <Button href="/productos" variant="primary">Ver productos</Button> */}
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                17/05/21 - 16:54
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center">
                            <Card.Header>Usuarios</Card.Header>
                            <Card.Body>
                                {/* <Card.Title>Special title treatment</Card.Title> */}
                                <div className="numeros-estadisticas text-success">
                                    765
                                </div>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                17/05/21 - 16:54
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
