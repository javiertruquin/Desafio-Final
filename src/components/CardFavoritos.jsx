import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import compu1 from "../assets/img/compu1/compu1.jpeg";

export default function CardFavoritos({ favorito, setUser, getFavoritos }) {
  const localToken = JSON.parse(localStorage.getItem("token")) || "";
  const [productoFavorito, setProductoFavorito] = useState({})
  const [token, setToken] = useState(localToken);
  let history = useHistory();

  // const { _id } = favorito;
  
  // const getProducto = async () => {
  //   try {
  //     const _id = favorito.producto;
  //     const response = await axios.get('/producto/' + _id)
  //     setProductoFavorito(response.data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  // useEffect(() => {
  //   getProducto();
  // }, [])

  const addToFav = async () => {
    if (!token) {
      alert("No estas logueado");
      history.push("/login");
      return;
    } else {
      try {
        const _id = favorito.producto._id
        console.log("entro");
        await axios.put("/usuarios/favorito", {
          itemFavorito: { producto: _id },
        });
        // const { data } = await axios.get("/auth");
        // setUser(data);
        // getFavoritos();
        // alert("producto agregado a favorito" + data);
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <>
      <div className="d-flex card-favoritos">
        <div className="col-4">
          <img src={favorito.producto?.image1} alt="" className="img-fluid" />
        </div>
        <div className="col-7">
          <button className="btn-serie">{favorito.producto?.serie}</button>
          <p className="titulo-producto">{favorito.producto?.titulo}</p>
          <span className="precio-producto">${favorito.producto?.precio}</span> <br />
          <span>
            {" "}
            <button className="btn-heart" onClick={addToFav}>
              {" "}
              <i className="fas fa-heart"></i>
            </button>
          </span>
          <span>
            {" "}
            <button className="btn-cart">
              {" "}
              <i className="fas fa-shopping-cart"></i>
            </button>
          </span>
          <button className="btn-comprar mt-2">Comprar</button>
        </div>
      </div>
    </>
  );
}
