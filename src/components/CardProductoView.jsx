import axios from "axios";
import { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";

export default function CardProductoView({
  computadora,
  user,
  setUser,
  productosFavoritos,
}) {
  const localToken = JSON.parse(localStorage.getItem("token")) || "";
  const { titulo, descripcion, precio, image1, serie } = computadora;
  const [token, setToken] = useState(localToken);
  const [esFavorito, setEsFavorito] = useState();
  let history = useHistory();

  // console.log("computadora", computadora);
  // console.log("producto", productosFavoritos);
    // useEffect(() => {
    //   productosFavoritos?.map((favorito) => {
    //       if (favorito?.producto === computadora._id) {
    //           console.log("id");
    //           setEsFavorito(true);
    //         } else {
    //           setEsFavorito(false);
    //         }
    //     })
    // }, [])


  useEffect(() => {
    setToken(localToken);
  }, [localToken]);

  const addToCart = async () => {
    if (!token) {
      alert("No estas logueado");
      history.push("/login");
      return;
    } else {
      try {
        await axios.put("/usuarios/carrito", {
          itemCarrito: { producto: computadora._id, cantidad: 1 },
        });
        const { data } = await axios.get("/auth");
        setUser(data);
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };
  const addToFav = async () => {
    if (!token) {
      alert("No estas logueado");
      history.push("/login");
      return;
    } else {
      try {
        console.log("entro");
        await axios.put("/usuarios/favorito", {
          itemFavorito: { producto: computadora._id },
        });
        const { data } = await axios.get("/auth");
        setUser(data);
        // alert("producto agregado a favorito" + data);
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };
  return (
    <div className="">
      <div className="my-1 p-4">
        <button className="btn-serie">{serie}</button>
        <Link to={"/producto/" + computadora._id}>
          <img src={image1} alt="" className="img-fluid" />
        </Link>
        <Link to={"/producto/" + computadora._id}>
          <p className="titulo-producto">{titulo}</p>
        </Link>
        <ul className="detalle-producto">
          <li>{descripcion}</li>
        </ul>
        <div className="d-flex ">
          <span className="precio-producto my-auto">${precio}</span>
          <span className="my-auto">
            <button className="btn-heart" onClick={addToFav}>
              <i className="fas fa-heart"></i>
            </button>
          </span>
          <span className="my-auto">
            <button className="btn-cart" onClick={addToCart}>
              <i className="fas fa-shopping-cart "></i>
            </button>
          </span>
          <div onClick={addToCart}>
            <Link to="/envio" className="my-auto">
              <button className="btn-comprar">Comprar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
