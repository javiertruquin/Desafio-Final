import compu1 from "../assets/img/compu1.webp"
import compu2 from "../assets/img/compu2.jpeg"
import compu3 from "../assets/img/compu3.jpg"

function SeccionCompus() {
    return (
        <div className="container position-relative">
                            <span className="titulo1">Nuestros Productos</span> 
            <div className="row contenedor-seccion-compus">

                <div className="col-4 subtitulo-seccion">
                Computadoras para todos los bolsillos
                </div>

                <div className="col-8 contenedor-items">
                    <div className="row">
                        <div className="col-4">
                            <img src={compu2} alt="" className="img-fluid"/>
                            <p className="titulo-producto">Estación de trabajo HP Z2 Mini G4</p>
                            <ul className="detalle-producto">
                                <li>Procesador AMD Ryzen™ 3</li>
                                <li>Windows 10 Home 64</li>
                                <li>4 GB de SDRAM DDR4-2400 (1 x 4 GB)</li>
                                <li>Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB</li>
                                <li>Gráficos AMD Radeon™</li>
                            </ul>
                            <p className="precio-producto">$64.000</p>
                        </div>
                        <div className="col-4">
                        <img src={compu2} alt="" className="img-fluid"/>
                            <p className="titulo-producto">Todo-en-Uno-HP ProOne 400</p>
                            <ul className="detalle-producto">
                                <li>Procesador AMD Ryzen™ 3</li>
                                <li>Windows 10 Home 64</li>
                                <li>4 GB de SDRAM DDR4-2400 (1 x 4 GB)</li>
                                <li>Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB</li>
                                <li>Gráficos AMD Radeon™</li>
                            </ul>
                            <p className="precio-producto">$86.000</p>
                        </div>
                        <div className="col-4">
                        <img src={compu2} alt="" className="img-fluid"/>
                            <p className="titulo-producto">Desktop HP 280 G4 </p>
                            <ul className="detalle-producto">
                                <li>Procesador AMD Ryzen™ 3</li>
                                <li>Windows 10 Home 64</li>
                                <li>4 GB de SDRAM DDR4-2400 (1 x 4 GB)</li>
                                <li>Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB</li>
                                <li>Gráficos AMD Radeon™</li>
                            </ul>
                            <p className="precio-producto">$124.000</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default SeccionCompus
