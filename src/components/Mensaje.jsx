import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Mensaje({ mensajesolo }) {
  const { nombre, email, mensaje, estado, fecha } = mensajesolo;

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
            <i class="fab fa-readme"></i>
          </Button>{" "}
          <Button variant="danger">
            <i class="far fa-trash-alt"></i>
          </Button>{" "}
        </td>
      </tr>
    </>
  );
}
