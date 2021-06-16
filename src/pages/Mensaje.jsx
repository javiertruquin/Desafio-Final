// import { MDBDataTableV5 } from "mdbreact";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Mensajes from "../components/Mensajes";
import { Container } from "react-bootstrap";

export default function Main() {
  const [articles, setArticles] = useState([]);

  const getMensajes = async () => {
    const response = await axios.get(`/mensaje`);
    setArticles(response.data);
  };

  useEffect(() => {
    getMensajes();
  }, []);

  return (
    <div>
      <Container>
        <Mensajes articles={articles} getMensajes={getMensajes} />
      </Container>
    </div>
  );
}
