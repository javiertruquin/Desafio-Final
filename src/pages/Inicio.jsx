import SeccionAccesorios from '../components/SeccionAccesorios';
import SlideOfertas from '../components/SlideOfertas';
import SeccionCompus from '../components/SeccionCompus';
import SeccionEnviosPagos from '../components/SeccionEnviosPagos';
import SlideAccesorios from "../components/SlideAccesorios"
import SlideNotebooks from "../components/SlideNotebooks"



export default function Inicio({setUser, carrito, user}) {
    return (
        <div className="container">
            <SlideOfertas />
            <SeccionCompus user={user} filtro={'computadora'} setUser={setUser} carrito={carrito} />
            <SeccionEnviosPagos />
            <SlideNotebooks className="mt-4"/>
            <SeccionCompus user={user} filtro={'notebook'} setUser={setUser} carrito={carrito} />
            <br />
            <SlideAccesorios className="mt-4"/>
            <SeccionAccesorios user={user} filtro={'accesorio'} setUser={setUser} carrito={carrito} />
        </div>
    );
}
