import SeccionAccesorios from '../components/SeccionAccesorios';
import SlideOfertas from '../components/SlideOfertas';
import SeccionCompus from '../components/SeccionCompus';
import SeccionEnviosPagos from '../components/SeccionEnviosPagos';

export default function Inicio() {
    return (
        <div className="container">
            <SlideOfertas />
            <SeccionCompus />
            <SeccionEnviosPagos />
            <SeccionCompus />
            <SeccionAccesorios />
        </div>
    );
}
