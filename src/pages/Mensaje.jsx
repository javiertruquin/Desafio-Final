// import { MDBDataTableV5 } from "mdbreact";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Mensajes from "../components/Mensajes";
import { Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";

// CommonJS
// const Swal = require("sweetalert2");

export default function Main({ user }) {
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
    Swal.fire("No estás logueado");
    return <Redirect to="/" />;
  }
  if (user.rol === "usuario") {
    alert("Error 404");
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
