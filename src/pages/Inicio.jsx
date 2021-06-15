import SeccionAccesorios from '../components/SeccionAccesorios';
import SlideOfertas from '../components/SlideOfertas';
import SeccionCompus from '../components/SeccionCompus';
import SeccionEnviosPagos from '../components/SeccionEnviosPagos';
import SlideAccesorios from "../components/SlideAccesorios"

export default function Inicio({setUser}) {
    return (
        <div className="container">
            <SlideOfertas />
            <SeccionCompus setUser={setUser} />
            <SeccionEnviosPagos />
            <SeccionCompus />
            <br />
            <SlideAccesorios className="mt-4"/>
            <SeccionAccesorios />
        </div>
    );
}
