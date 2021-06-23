import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

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

  const final = titulo.substring(0, 40);



  // useEffect(() => {
  //     user.favoritos?.map((favorito) => {
  //         const productoFavorito = favorito;
  //         if (productoFavorito.producto === _id) {
  //           setEsFavorito(true);
  //         } else {
  //           setEsFavorito(false);
  //         }
  //     })

  // }, [user])

  //   for (let i = 0; i < user.favoritos.length; i++) {
  //   }

  //   console.log("esFavorito", user);

  useEffect(() => {
    setToken(localToken);
  }, [localToken]);

  const addToCart = async () => {
    if (!token) {
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
      <div className="my-1 p-4" >
        <button className="btn-serie">{serie}</button>
        <Link to={"/producto/" + computadora._id}>
          <img src={image1} alt="" className="img-fluid" />
        </Link>
        <Link to={"/producto/" + _id}>
          <p className="titulo-producto" style={{minHeight: '60px'}}>{final}</p>
        </Link>
        <ul className="detalle-producto" style={{minHeight: '110px'}}>
          <li>{descripcion}</li>
        </ul>
        <div className="d-flex justify-content-between px-3">
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
