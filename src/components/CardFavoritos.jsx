import axios from "axios";
import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function CardFavoritos({ favorito, handleClose}) {
  const localToken = JSON.parse(localStorage.getItem("token")) || "";
  const [esFavorito, setEsFavorito] = useState(true)
  let history = useHistory();

  const addToFav = async () => {
    setEsFavorito(!esFavorito);
    if (!localToken) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No estás logueado",
        timer: 1800,
        showConfirmButton: false,
      });
      history.push("/login");
      return;
    } else {
      try {
        const _id = favorito.producto._id;
        await axios.put("/usuarios/favorito", {
          itemFavorito: { producto: _id },
        });
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <>
      <div className="d-flex card-favoritos">
        <div className="col-4">
        <Link to={"/producto/" + favorito.producto._id} onClick={() => handleClose()}>
          <img src={favorito.producto?.image1} alt="" className="img-fluid" />
          </Link>
        </div>
        <div className="col-7">
          <button className="btn-serie mb-3">{favorito.producto?.serie}</button>
          <Link to={"/producto/" + favorito.producto._id} onClick={() => handleClose()}>
          <p className="titulo-producto">{favorito.producto?.titulo}</p>
          </Link>
        { favorito.producto.descuento && <del>${favorito.producto?.precio}</del>}
          <div>
          <span className="precio-producto">
          ${ favorito.producto.descuento ? favorito.producto.descuento : favorito.producto?.precio }
          </span>
          <span>
            
            <button className={esFavorito ? "btn-heart-true" : "btn-heart"} onClick={addToFav}>
  
              <i className="fas fa-heart"></i>
            </button>
          </span>
          <span>

            <button className="btn-cart">
  
              <i className="fas fa-shopping-cart"></i>
            </button>
          </span>
          <button className="btn-comprar mt-2">Comprar</button>
          </div>
        </div>
      </div>
    </>
  );
}
