import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Mensaje({ mensajesolo, getMensajes }) {
  const { _id, nombre, email, mensaje, estado, fecha } = mensajesolo;

  const eliminar = async () => {
    // event.preventDefault();
    try {
      const params = { _id };
      await axios.delete("/mensaje", { params });

      alert("Mensaje eliminado con éxito!😁");
      getMensajes();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <tr>
        <td>{fecha}</td>
        <td>{nombre}</td>
        <td>{email}</td>
        <td>{mensaje}</td>
        <td>{estado}</td>
        <td className="col-4">
          <Button variant="primary">
            <i className="fab fa-readme"></i>
          </Button>{" "}
          <Button variant="danger" onClick={eliminar}>
            <i className="far fa-trash-alt"></i>
          </Button>{" "}
        </td>
      </tr>
    </>
  );
}
