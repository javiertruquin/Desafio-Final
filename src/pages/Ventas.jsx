import axios from "axios";
import React, { useEffect, useState } from "react";
import VentasConcretadas from "../components/VentasConcretadas";
import { Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";

export default function Main({ user }) {
  const [articles, setArticles] = useState([]);
  const localToken = JSON.parse(localStorage.getItem("token")) || "";
  const [token, setToken] = useState(localToken);
  const getVentas = async () => {
    const response = await axios.get(`/venta`);
    setArticles(response.data);
  };

  useEffect(() => {
    getVentas();
  }, []);

  if (!token) {
    alert("No estas logueado");
    return <Redirect to="/" />;
  }
  // if (user.rol === "usuario") {
  //   alert("Error 404");
  //   return <Redirect to="/" />;
  // }
  console.log(articles);
  return (
    <div>
      <Container>
        <VentasConcretadas articles={articles} getVentas={getVentas} />
      </Container>
    </div>
  );
}
