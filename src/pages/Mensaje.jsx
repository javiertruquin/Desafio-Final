import React from "react";
import { MDBDataTableV5 } from "mdbreact";

export default function Mensaje() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Fecha",
        field: "fecha",
        width: 100,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Fecha",
        },
      },
      {
        label: "Nombre",
        field: "nombre",
        width: 230,
      },
      {
        label: "Email",
        field: "email",
        width: 180,
      },
      {
        label: "Mensaje",
        field: "mensaje",
        sort: "asc",
        width: 420,
      },
      {
        label: "Estado",
        field: "estado",
        sort: "disabled",
        width: 100,
      },
    ],
    rows: [
      {
        fecha: "2011/04/25",
        nombre: "Eduardito",
        email: "eduardito_el_papus@hotmail.com",
        mensaje:
          "Hola, como esta? Quiero saber el precio de las compus para jugar al fornite",
        estado: "Sin leer",
      },
      {
        fecha: "2012/09/15",
        nombre: "Mamocho",
        email: "mamocho_el_papus@hotmail.com",
        mensaje: "Buenos dias... Quiero una compu de la gran flauta",
        estado: "Sin leer",
      },
      {
        fecha: "2012/04/25",
        nombre: "Raulito",
        email: "raulllego@hotmail.com",
        mensaje: "Quiero una compu para zoom y facebook",
        estado: "Sin leer",
      },
      {
        fecha: "2011/04/25",
        nombre: "Algas Marinas",
        email: "tengoasma@gmail.com",
        mensaje: "lorem itsu sakonami sakakaka",
        estado: "Sin leer",
      },
      {
        fecha: "2011/04/25",
        nombre: "Eduardito",
        email: "eduardito_el_papus@hotmail.com",
        mensaje:
          "Hola, como esta? Quiero saber el precio de las compus para jugar al fornite",
        estado: "Sin leer",
      },
      {
        fecha: "2011/04/25",
        nombre: "Eduardito",
        email: "eduardito_el_papus@hotmail.com",
        mensaje:
          "Hola, como esta? Quiero saber el precio de las compus para jugar al fornite",
        estado: "Sin leer",
      },
      {
        fecha: "2011/04/25",
        nombre: "Eduardito",
        email: "eduardito_el_papus@hotmail.com",
        mensaje:
          "Hola, como esta? Quiero saber el precio de las compus para jugar al fornite",
        estado: "Sin leer",
      },
      {
        fecha: "2011/04/25",
        nombre: "Eduardito",
        email: "eduardito_el_papus@hotmail.com",
        mensaje:
          "Hola, como esta? Quiero saber el precio de las compus para jugar al fornite",
        estado: "Sin leer",
      },
    ],
  });

  return (
    <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={datatable}
    />
  );
}
