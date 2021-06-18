import axios from "axios";
import { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";

export default function CardProductoView({ computadora, setUser, carrito }) {
    const localToken = JSON.parse(localStorage.getItem("token")) || "";
    const { titulo, descripcion, precio, image1, _id, serie } = computadora;
    const [token, setToken] = useState(localToken);
    let history = useHistory();

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
                    itemCarrito: { producto: _id, cantidad: 1 },
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
            <div className="my-1 p-4">
                <button className="btn-serie">{serie}</button>
                <Link to={"/producto/" + _id}>
                    <img src={image1} alt="" className="img-fluid" />
                </Link>
                <Link to={"/producto/" + _id}>
                    <p className="titulo-producto">{titulo}</p>
                </Link>
                <ul className="detalle-producto">
                    <li>{descripcion}</li>
                </ul>
                <div className="d-flex ">
                    <span className="precio-producto my-auto">${precio}</span>
                    <span className="my-auto">
                        <button className="btn-heart">
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
