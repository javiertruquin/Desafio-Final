import axios from "axios";
import React, { useEffect, useState } from "react";
import VentasConcretadas from "../components/VentasConcretadas";
import { Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";

export default function Main({ user}) {
  const [articles, setArticles] = useState([]);
  const localToken = JSON.parse(localStorage.getItem("token")) || "";
  const getVentas = async () => {
    const response = await axios.get(`/venta`);
    setArticles(response.data);
  };

  useEffect(() => {
    getVentas();
  }, []);

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
    <div>
      <Container>
        <VentasConcretadas articles={articles} getVentas={getVentas} />
      </Container>
    </div>
  );
}
