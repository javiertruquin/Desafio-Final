// import { MDBDataTableV5 } from "mdbreact";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Mensajes from "../components/Mensajes";

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
      <Mensajes articles={articles} getMensajes={getMensajes} />
    </div>
  );
}
