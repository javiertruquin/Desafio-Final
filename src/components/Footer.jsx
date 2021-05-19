import logo from '../assets/img/logo.png'
import pagosfooter from '../assets/img/pagosfooter.png'


function Footer() {
    return (
        <div className="footer mt-5 py-4">
        <div className="container">
            <div className="row">
                <div className="col-3 mt-auto">
                    <img src={logo} alt="" style={{ width:'200px' }} />
                    <ul className="pt-2">
                        <li className="li-footer py-2">Gral. Paz 576 - Piso 9 - Oficina 2</li>
                        <li className="li-footer py-2">San Miguel de Tucumán - Argentina</li>
                        <li className="li-footer py-2">+5493815783030</li>
                    </ul>
                </div>
                <div className="col-6">
                    <div className="titulos-footer pt-3">
                        Donde nos encontramos
                    </div>
                    <div className="">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.113034520811!2d-65.20939648495664!3d-26.83635688316051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0e8d0271b7%3A0xa2685800d87df915!2sPiso%209%2C%20Barrio%20Sur%2C%20Gral.%20Paz%20576%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1620589517701!5m2!1ses!2sar" title="ubicacion" width="539" height="270" style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div className="col-3 mt-auto">
                    <p className="titulos-footer ps-3">Horarios de atención:</p>
                    <ul>
                        <li className="li-footer py-2">Lunes a viernes: 9:00 a 17:00</li>
                        <li className="li-footer py-2">Sábados: 9:00 a 13:00</li>
                        <li className="li-footer py-2">contacto@rollingtech.com.ar</li>
                    </ul>
                </div>
                <hr className=" mt-4" style={{border: '1px solid #ababab'}} />
            <div className="row pt-3 sub-footer">
                <div className="col-6 detalle-producto"><b> © Rolling Tech </b>- Todos los derechos reservados. Desde 2020 junto a vos</div>
                <div className="col-6 text-lg-center"><img src={ pagosfooter } alt="" style={{ width:'500px'}} /></div>
            </div>
            
            </div>
        </div>
        </div>
    )
}

export default Footer
