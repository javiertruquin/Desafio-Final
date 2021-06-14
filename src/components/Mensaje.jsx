export default function Mensaje({ mensajesolo }) {
  const { nombre, email, mensaje, estado, fecha } = mensajesolo;

  return (
    <div className="">
      <div className="p-2 my-3" style={{ width: 200 }}>
        <div style={{ fontSize: "0.7rem" }}>by {nombre}</div>
        <h3>{email}</h3>
        <h3>{mensaje}</h3>
        <h3>{estado}</h3>
        <div className="d-flex justify-content-between m-2">
          <span style={{ fontSize: "0.7rem" }}>
            Publicado el: <strong>{fecha}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
