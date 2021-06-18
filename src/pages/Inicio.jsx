import SeccionAccesorios from '../components/SeccionAccesorios';
import SlideOfertas from '../components/SlideOfertas';
import SeccionCompus from '../components/SeccionCompus';
import SeccionEnviosPagos from '../components/SeccionEnviosPagos';
import SlideAccesorios from "../components/SlideAccesorios"
import SlideNotebooks from "../components/SlideNotebooks"



export default function Inicio({setUser, carrito}) {
    return (
        <div className="container">
            <SlideOfertas />
            <SeccionCompus filtro={'computadora'} setUser={setUser} carrito={carrito} />
            <SeccionEnviosPagos />
            <SlideNotebooks className="mt-4"/>
            <SeccionCompus filtro={'notebook'} setUser={setUser} carrito={carrito} />
            <br />
            <SlideAccesorios className="mt-4"/>
            <SeccionAccesorios filtro={'accesorio'} setUser={setUser} carrito={carrito} />
        </div>
    );
}
