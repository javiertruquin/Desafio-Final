import axios from "axios";

export default function CardProductoView({ computadora, setUser , carrito }) {
    const { titulo, descripcion, precio, image1, _id } = computadora;
    
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
        <div className="col-sm-12 col-lg-6 col-xl-4">
            <div className="my-1 p-4">
                <button className="btn-serie">Serie Advance</button>
                <img src={image1} alt="" className="img-fluid" />
                <p className="titulo-producto">{titulo}</p>
                <ul className="detalle-producto">
                    <li>{descripcion}</li>
                </ul>
                <span className="precio-producto">${precio}</span>
                <span>
                    <button className="btn-heart">
                        <i class="fas fa-heart"></i>
                    </button>
                </span>
                <span>
                    <button className="btn-cart" onClick={addToCart}>
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </span>
                <button className="btn-comprar mt-2">Comprar</button>
            </div>
        </div>
    );
}
