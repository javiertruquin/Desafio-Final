import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function FilaUsuarios({ usuario }) {
    // const [contadorState, setContadorState] = useState(0)
    // setContadorState(contadorState++);
  return (
    <>
      <tr>
        <td>1</td>
        <td>{usuario.nombre}</td>
        <td>{usuario.rol}</td>
        <td>{usuario.email}</td>
        <td className="col-4">
          <Button variant="primary">
            <i class="fas fa-info-circle"></i>
          </Button>{" "}
          <Button className="my-1" variant="secondary">
            <i class="far fa-edit"></i>
          </Button>{" "}
          {/* <Button onClick={handleCrear} className="my-1" variant="secondary">
            <i class="far fa-edit"></i>
          </Button>{" "} */}
          <Button variant="danger">
            <i class="far fa-trash-alt"></i>
          </Button>{" "}
        </td>
      </tr>
    </>
  );
}
