import axios from "axios";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function CardProductoView({ computadora, setUser, carrito }) {
    const { titulo, descripcion, precio, image1, _id, serie } = computadora;

    const addToCart = async () => {
        try {
            await axios.put("/usuarios/carrito", {
                itemCarrito: { producto: _id, cantidad: 1 },
            });
            const { data } = await axios.get("/auth");
            setUser(data);
        } catch (error) {
            console.log(error.response.data);
        }
    };
    return (
        <div className="">
            <div className="my-1 p-4">
                <button className="btn-serie">{serie}</button>
                <img src={image1} alt="" className="img-fluid" />
                <p className="titulo-producto">{titulo}</p>
                <ul className="detalle-producto">
                    <li>{descripcion}</li>
                </ul>
                <div className="d-flex ">
                    <span className="precio-producto my-auto">${precio}</span>
                    <span className="my-auto">
                        <button className="btn-heart">
                            <i class="fas fa-heart"></i>
                        </button>
                    </span>
                    <span className="my-auto">
                        <button className="btn-cart" onClick={addToCart}>
                            <i class="fas fa-shopping-cart "></i>
                        </button>
                    </span>
                    <Nav.Link to="/envio" as={NavLink} className="my-auto">
                        <button
                            className="btn-comprar"
                            onClick={addToCart}
                        >
                            Comprar
                        </button>
                    </Nav.Link>
                </div>
            </div>
        </div>
    );
}
