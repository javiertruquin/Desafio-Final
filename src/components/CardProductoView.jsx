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
  const { titulo, descripcion, precio, image1, serie, _id } = computadora;
  const [token, setToken] = useState(localToken);
  const [esFavorito, setEsFavorito] = useState("btn-heart");
  let history = useHistory();

  const final = titulo.substring(0, 40);




  const checkFavoritos = (() => {
    productosFavoritos?.map((favorito) => {
      

          if (favorito.producto._id === _id) {
            setEsFavorito("btn-heart-true");
          } else {
            setEsFavorito("btn-heart");
          }
      })
  })
  useEffect(() => {
    checkFavoritos()
  }, [])

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
        await axios.put("/usuarios/favorito", {
          itemFavorito: { producto: computadora._id },
        });
        const { data } = await axios.get("/auth");
        setUser(data);
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };
  return (
    <div className="">
      <div className="mb-3 p-4"  style={{minHeight: '550px', display: 'flex', flexDirection: 'column'}}>
        <button className="btn-serie mb-3">{serie}</button>
        <Link to={"/producto/" + computadora._id}>
          <img src={image1} alt="" className="img-fluid" />
        </Link>
        <Link to={"/producto/" + _id}>
          <p className="titulo-producto" style={{minHeight: '60px'}}>{final}</p>
        </Link>
        <ul className="detalle-producto">
          <li>{descripcion}</li>
        </ul>
        <div className="justify-content-between mt-auto">
        { computadora.descuento && <del className="ml-3">${precio}</del>}
          <div className="d-flex justify-content-between px-2">
          <span className="precio-producto my-auto">
            ${ computadora.descuento ? computadora.descuento : precio }
            </span>
          <span className="my-auto">
            <button className={esFavorito} onClick={addToFav}>
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
    </div>
  );
}
