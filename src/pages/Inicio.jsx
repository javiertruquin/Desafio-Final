import SeccionAccesorios from '../components/SeccionAccesorios';
import SlideOfertas from '../components/SlideOfertas';
import SeccionCompus from '../components/SeccionCompus';
import SeccionEnviosPagos from '../components/SeccionEnviosPagos';
import SlideAccesorios from "../components/SlideAccesorios"
import SlideNotebooks from "../components/SlideNotebooks"



export default function Inicio({setUser, carrito, user}) {

    // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // const nuevoArray = array.slice()
    // console.log('nuevoArray', nuevoArray)

    return (
        <div className="container">
            <SlideOfertas />
            <SeccionCompus limite="9" user={user} filtro={'computadora'} setUser={setUser} carrito={carrito} />
            <SeccionEnviosPagos />
            <SlideNotebooks className="mt-4"/>
            <SeccionCompus limite="9" user={user} filtro={'notebook'} setUser={setUser} carrito={carrito} />
            <br />
            <SlideAccesorios className="mt-4"/>
            <SeccionAccesorios limite="9" user={user} filtro={'accesorio'} setUser={setUser} carrito={carrito} />
        </div>
    );
}
