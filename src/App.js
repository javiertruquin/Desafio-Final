import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavReactB from './components/NavReactB'
import SlideOfertas from './components/SlideOfertas';
import SeccionCompus from './components/SeccionCompus';
import SeccionEnviosPagos from './components/SeccionEnviosPagos';


function App() {
  return (
    <>
    <NavReactB />
    <SlideOfertas />
    <SeccionCompus />
    <SeccionEnviosPagos />
    </>
  );
}

export default App;
