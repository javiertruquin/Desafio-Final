import Mensaje from "./Mensaje";

export default function Mensajes({ articles }) {
  return (
    <div className="d-flex flex-wrap">
      {articles.map((mensaje) => (
        <Mensaje mensajesolo={mensaje} key={mensaje._id} />
      ))}
    </div>
  );
}
