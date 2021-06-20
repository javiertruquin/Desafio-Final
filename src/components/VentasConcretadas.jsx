import Venta from "./Venta";
import { Table } from "react-bootstrap";

export default function Mensajes({ articles, getVentas }) {
  return (
    <div>
      <div className="">
        <p className="titulo-view-dash mt-4">Ventas</p>
        <p className="subtitulo-view-dash">Listado completo de ventas.</p>

        <hr className=" mt-4" style={{ border: "1px solid #ababab" }} />
      </div>
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Numero Venta</th>
            <th>Artículos vendidos</th>
            <th>Datos de envío</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((venta) => (
            <Venta venta={venta} getVentas={getVentas} key={venta._id} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
