import accesorio4 from "../assets/img/accesorio4/accesorio4-1.jpg";

export default function CardProductoSlide() {
    return (
        <div className="my-1 p-4">
            <button className="btn-serie">Serie Advance</button>
            <img src={accesorio4} alt="" className="img-fluid my-4" />
            <p className="titulo-producto">Estación de trabajo HP Z2 Mini G4</p>
            <ul className="detalle-producto">
                <li>Procesador AMD Ryzen™ 3</li>
                <li>Windows 10 Home 64</li>
                <li>4 GB de SDRAM DDR4-2400 (1 x 4 GB)</li>
                <li>Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB</li>
                <li>Gráficos AMD Radeon™</li>
            </ul>
            <span className="precio-producto">$64.000</span>
            <span>
                {" "}
                <button className="btn-heart">
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
    );
}
