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
            <th>#</th>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Artículos vendidos</th>
            <th>Total</th>
            <th className="col-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((venta, index) => (
            <Venta venta={venta} index={index + 1} getVentas={getVentas} key={venta._id} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
