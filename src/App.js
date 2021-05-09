import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavReactB from './components/NavReactB'
import SlideOfertas from './components/SlideOfertas';
import SeccionCompus from './components/SeccionCompus';
import SeccionEnviosPagos from './components/SeccionEnviosPagos';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <NavReactB />
    <SlideOfertas />
    <SeccionCompus />
    <SeccionEnviosPagos />
    <SeccionCompus />
    <Footer />
    </>
  );
}

export default App;
