// import { MDBDataTableV5 } from "mdbreact";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Mensajes from "../components/Mensajes";

export default function Main() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getMensajes = async () => {
      const response = await axios.get(`/mensaje`);
      setArticles(response.data);
    };

    getMensajes();
  }, []);

  return (
    <div>
      <Mensajes articles={articles} />
    </div>
  );
}

// export default function Mensaje() {
//   const [datatable, setDatatable] = React.useState({
//     columns: [
//       {
//         label: "Fecha",
//         field: "fecha",
//         width: 100,
//         attributes: {
//           "aria-controls": "DataTable",
//           "aria-label": "Fecha",
//         },
//       },
//       {
//         label: "Nombre",
//         field: "nombre",
//         width: 230,
//       },
//       {
//         label: "Email",
//         field: "email",
//         width: 180,
//       },
//       {
//         label: "Mensaje",
//         field: "mensaje",
//         sort: "asc",
//         width: 420,
//       },
//       {
//         label: "Estado",
//         field: "estado",
//         sort: "disabled",
//         width: 100,
//       },
//     ],
//     rows: [
//       {
//         fecha: "2011/04/25",
//         nombre: "Eduardito",
//         email: "eduardito_el_papus@hotmail.com",
//         mensaje: "Hola, como esta? Quiero saber el precio de las compus",
//         estado: "Sin leer",
//       },
//     ],
//   });

//   return (
//     <MDBDataTableV5
//       hover
//       entriesOptions={[5, 20, 25]}
//       entries={5}
//       pagesAmount={4}
//       data={datatable}
//     />
//   );
// }
