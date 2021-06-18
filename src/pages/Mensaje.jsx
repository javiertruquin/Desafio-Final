// import { MDBDataTableV5 } from "mdbreact";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Mensajes from "../components/Mensajes";
import { Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";


export default function Main() {
    const [articles, setArticles] = useState([]);
    const localToken = JSON.parse(localStorage.getItem("token")) || "";
    const [token, setToken] = useState(localToken);
    const getMensajes = async () => {
        const response = await axios.get(`/mensaje`);
        setArticles(response.data);
    };

    useEffect(() => {
        getMensajes();
    }, []);

    if (!token) {
        alert("No estas logueado");
        return <Redirect to="/" />;
    }
    return (
        <div>
            <Container>
                <Mensajes articles={articles} getMensajes={getMensajes} />
            </Container>
        </div>
    );
}
