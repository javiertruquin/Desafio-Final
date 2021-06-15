import Mensaje from "./Mensaje";
import { Table } from "react-bootstrap";

export default function Mensajes({ articles, getMensajes }) {
  return (
    <div>
      <div className="">
        <p className="titulo-view-dash mt-4">Mensajes</p>
        <p className="subtitulo-view-dash">
          Listado completo de mensajes de los usuarios.
        </p>

        <hr className=" mt-4" style={{ border: "1px solid #ababab" }} />
      </div>
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Mensaje</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((mensaje) => (
            <Mensaje
              mensajesolo={mensaje}
              getMensajes={getMensajes}
              key={mensaje._id}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
