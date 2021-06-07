import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import empresa from "../assets/img/empresa.jpg";
import empresa2 from "../assets/img/empresa2.jpg";
import miembro1 from "../assets/img/fede.png";
import miembro2 from "../assets/img/javier.png";
import miembro3 from "../assets/img/tomas.png";
import miembro4 from "../assets/img/andres.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function SobreNosotros() {
  return (
    <>
    <div className="container fuente mt-lg-5 mt-3">
      <div className="row">
        <div className="col-lg-5 text-lg-right ps-lg-5 pe-lg-5 pt-lg-3 mb-4">
          <span className="titulo-nosotros">Somos líderes en tecnología y provisión de equipos</span>
          <div className="subtitulo-nosotros">Conocenos!</div>
        </div>
        <div className="col-lg-7">
          <img src={empresa} alt="" className="img-nosotros-head" />
        </div>
      </div>
      <hr className=" mt-5" style={{ border: '.3px solid #e2e2e2' }} />
      <div className="row">
        <div className="col d-flex justify-content-center mt-5">
        <p className="destacado-nosotros"><strong>RollingTech</strong>  es una empresa nacional con 12 años de trayectoria en el mercado orientada exclusivamente a la venta y comercialización de notebooks, computadoras de escritorio e insumos de computación para el más alto performance de uso.</p>
        </div>
      </div>
      <hr className=" mt-5" style={{ border: '.3px solid #e2e2e2' }} />
      <div className="row mt-5">
        <div className="col-lg-6">
          <img src={empresa2} alt="img" className="img-empresa2" />
        </div>
        <div className="col-lg-6 mt-3 ps-4">
          <span className="titulo-mision mt-4">Misión</span>
          <p className="sub-mision mt-3">Poner a disposición del cliente la mayor cantidad de opciones a la hora de elegir su computadora, sea de escritorio o portátil, sin dejar de lado el precio más competitivo posible.</p>
          <span className="titulo-mision mt-4">Nuestro compromiso</span>
          <p className="sub-mision mt-3">Guiar al cliente desde el minuto cero en la compra.
                            Nos comprometemos que nuestro cliente se lleve justo
                            lo que estaba buscando, asesorando en cada paso y
                            poniendo a su disposición todo nuestro conocimiento
                            en el rubro.</p>
          <span className="titulo-mision mt-4">Valor</span>
          <p className="sub-mision mt-3">Cada producto que vendemos cuenta con su garantía
                            original, pero además, sumamos nuestra garantía de
                            RollingTech. Ese valor que sumamos es una
                            demostración de cuanto valoramos a nuestros
                            clientes.</p>
        </div>
        
      </div>
    </div>
   
   
   
    <div className="container fuente mt-5">
      {/* // <!-- EMPIEZA AREA DEL HEADER --> */}
      <div className="row">
        <div className="col-lg-5 text-lg-right ps-lg-5 pe-lg-5 pt-lg-3">
          <span className="titulo-nosotros">Somos líderes en tecnología y provisión de equipos</span>
          <div className="subtitulo-nosotros">Conocenos!</div>
        </div>
        
      </div>
      
      <div className="">
        <p className="mu-title">
          <strong>RollingTech</strong>  es una empresa nacional con 12 años de trayectoria en el mercado orientada exclusivamente a la venta y comercialización de notebooks, computadoras de escritorio e insumos de computación para el más alto performance de uso.
        </p>
      </div>
      <hr className=" mt-5" style={{ border: '.3px solid #e2e2e2' }} />



      {/* <div id="mu-page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-page-header-area">
                <h1 className="mu-page-header-title">Sobre Nosotros</h1>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* // <!-- TERMINA AREA DEL HEADER --> */}

      {/* // <!-- EMPIEZA EL SOBRE NOSOTROS --> */}
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-about-area">
                {/* <!-- Title --> */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="mu-title">
                      <p>
                        <strong>RollingTech</strong>  es una empresa nacional con 12 años de trayectoria en el mercado orientada
                        exclusivamente a la venta y comercialización de notebooks, computadoras de escritorio e
                        insumos de computación para el más alto performance de uso.
                      </p>
                    </div>
                  </div>
                </div>
                <hr className=" mt-0 mb-lg-5" style={{ border: '.3px solid #e2e2e2' }} />
                {/* <!-- EMPIEZA PARTE DE NUESTRAS MISIONES --> */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="mu-about-left">
                      <img src={empresa2} alt="img" className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mu-about-right">
                      <ul>
                        <li>
                          <h3>Nuestra Misión</h3>
                          <p>
                            Poner a disposición del cliente la mayor cantidad de
                            opciones a la hora de elegir su computadora, sea de
                            escritorio o portátil, sin dejar de lado el precio
                            más competitivo posible.
                          </p>
                        </li>
                        <li>
                          <h3>Nuestro Compromiso</h3>
                          <p>
                            Guiar al cliente desde el minuto cero en la compra.
                            Nos comprometemos que nuestro cliente se lleve justo
                            lo que estaba buscando, asesorando en cada paso y
                            poniendo a su disposición todo nuestro conocimiento
                            en el rubro.
                          </p>
                        </li>
                        <li>
                          <h3>Nuestro Valor</h3>
                          <p>
                            Cada producto que vendemos cuenta con su garantía
                            original, pero además, sumamos nuestra garantía de
                            RollingTech. Ese valor que sumamos es una
                            demostración de cuanto valoramos a nuestros
                            clientes.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- TERMINA PARTE DE NUESTRAS MISIONES --> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*     // <!-- TERMINA EL SOBRE NOSOTROS --> */}

      {/*     
    <!-- EMPIEZA CUADRO CON IMAGENES --> */}
      <section id="mu-skills">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-skills-area">
                {/* <!-- TITULO --> */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="mu-title">
                      <h2>Comunicate Con Nosotros</h2>
                      <p>
                        Como estamos en cada parte del país, queremos atender tu
                        consulta donde estemos mas cerca. Seleccioná el local
                        con el que quieras comunicarte:
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- CONTENIDO DE CUADROS --> */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="mu-skills-content">
                      <div className="row">
                        {/* <!-- CONTENIDO INDIVIDUAL DE CUADROS 1 --> */}
                        <div className="col-md-3">
                          <div className="mu-single-skills">
                            <div className="mu-skills-circle">
                              <div
                                className="mu-circle"
                                data-circle-dialWidth="15"
                              >
                                <div className="loader-bg">
                                  <div className="text">
                                    <Nav.Link to="/tucuman" as={NavLink}>
                                      TUCUMÁN
                                    </Nav.Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h3>Tucumán</h3>
                            <p>
                              Gral. Paz 576 - Piso 9 - Oficina 2 - San Miguél de
                              Tucumán - Tucumán. Tel: 381-5783030
                            </p>
                          </div>
                        </div>
                        {/* <!-- TERMINA CONTENIDO INDIVIDUAL DE CUADROS 1 -->
                        <!-- CONTENIDO INDIVIDUAL DE CUADROS 2--> */}
                        <div className="col-md-3">
                          <div className="mu-single-skills">
                            <div className="mu-skills-circle">
                              <div
                                className="mu-circle"
                                data-circle-dialWidth="15"
                              >
                                <div className="loader-bg">
                                  <div className="text">
                                    <Nav.Link to="/capital" as={NavLink}>
                                      CAPITAL FEDERAL
                                    </Nav.Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h3>Capital Federal</h3>
                            <p>
                              Almenábar 332 - CABA - Buenos Aires. Tel:
                              11-3540153
                            </p>
                          </div>
                        </div>
                        {/* <!-- TERMINA CONTENIDO INDIVIDUAL DE CUADROS 2 -->
                        <!-- CONTENIDO INDIVIDUAL DE CUADROS 3 --> */}
                        <div className="col-md-3">
                          <div className="mu-single-skills">
                            <div className="mu-skills-circle">
                              <div
                                className="mu-circle"
                                data-circle-dialWidth="15"
                              >
                                <div className="loader-bg">
                                  <div className="text">
                                    <Nav.Link to="/rosario" as={NavLink}>
                                      ROSARIO
                                    </Nav.Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h3>Rosario</h3>
                            <p>
                              Além 3636 - Rosario - Santa Fe. Tel: 341-4459854
                            </p>
                          </div>
                        </div>

                        {/*<!-- TERMINA CONTENIDO INDIVIDUAL DE CUADROS 3 -->
                        <!-- CONTENIDO INDIVIDUAL DE CUADROS 4--> */}
                        <div className="col-md-3">
                          <div className="mu-single-skills">
                            <div className="mu-skills-circle">
                              <div
                                className="mu-circle"
                                data-circle-dialWidth="15"
                              >
                                <div className="loader-bg">
                                  <div className="text">
                                    <Nav.Link to="/sannicolas" as={NavLink}>
                                      SAN NICOLAS
                                    </Nav.Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h3>San Nicolás</h3>
                            <p>
                              José Ingenieros 389 - San Nicolás - Buenos Aires.
                              Tel: 336-4540977
                            </p>
                          </div>
                        </div>

                        {/* <!-- TERMINA CONTENIDO INDIVIDUAL DE CUADROS 4 --> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/*                 <!-- TERMINA CONTENIDO DE CUADROS --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*       <!-- TERMINA SECCION GENERAL CON IMAGENES --> */}

      {/*       <!-- EMPIEZA EL EQUIPO --> */}
      <section id="mu-team">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-team-area">
                {/*                 <!-- TITLO DE EQUIPO --> */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="mu-title">
                      <h2>Las Personas Detrás</h2>
                      <p>
                        Como queremos ser parte de tu vida, también queremos que
                        nos conozcas. Éstos somos nosotros:
                      </p>
                    </div>
                  </div>
                </div>
                {/*                 <!-- CUADRO DE LOS INTEGRANTES --> */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="mu-team-content">
                      <div className="row">
                        {/*                         <!-- EMPIEZA INTEGRANTE 1 --> */}
                        <div className="col-md-6">
                          <div className="mu-single-team">
                            <div className="mu-single-team-img">
                              <img src={miembro1} alt="img" />
                            </div>
                            <div className="mu-single-team-content">
                              <h3>Federico Alvarez</h3>
                              <span>Fundador</span>
                              <p>
                                Un loquito lindo que le manda rocanroll a todo
                                lo que es diseño. En sus dedos hay arte. En la
                                calle le dicen "La Locomotora".
                              </p>
                              <ul className="mu-team-social">
                                <li>
                                  <a href="#">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FontAwesomeIcon icon={faTwitter} />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FontAwesomeIcon icon={faInstagram} />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/*                         <!-- TERMINA INTEGRANTE 1  -->
                        <!-- EMPIEZA INTEGRANTE 2 --> */}
                        <div className="col-md-6">
                          <div className="mu-single-team">
                            <div className="mu-single-team-img">
                              <img src={miembro2} alt="img" />
                            </div>
                            <div className="mu-single-team-content">
                              <h3>Javier Truquín</h3>
                              <span>Fundador</span>
                              <p>
                                Un crack de la lógica y de los piropos
                                cibernéticos. Le gusta jugar al truco y en los
                                ratos libres rescata gatitos de los árboles.
                              </p>
                              <ul className="mu-team-social">
                                <li>
                                  <a href="#">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FontAwesomeIcon icon={faTwitter} />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FontAwesomeIcon icon={faInstagram} />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* <!-- TERMINA INTEGRANTE 2  -->
                        <!-- EMPIEZA INTEGRANTE 3 --> */}
                        <div className="col-md-6">
                          <div className="mu-single-team">
                            <div className="mu-single-team-img">
                              <img src={miembro3} alt="img" />
                            </div>
                            <div className="mu-single-team-content">
                              <h3>Tomás Guerineau</h3>
                              <span>Fundador</span>
                              <p>
                                Capo de los capos. Mientras todos duermen... él
                                programa. Algunos se preguntan si realmente es
                                humano.
                              </p>
                              <ul className="mu-team-social">
                                <li>
                                  <a href="#">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FontAwesomeIcon icon={faTwitter} />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FontAwesomeIcon icon={faInstagram} />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/*                         <!-- EMPIEZA INTEGRANTE 3 -->
                        <!-- EMPIEZA INTEGRANTE 4 --> */}
                        <div className="col-md-6">
                          <div className="mu-single-team">
                            <div className="mu-single-team-img">
                              <img src={miembro4} alt="img" />
                            </div>
                            <div className="mu-single-team-content">
                              <h3>Andrés Donadio</h3>
                              <span>Fundador</span>
                              <p>
                                Un vagabundo. Empezó en RollingTech por la
                                gracia de Dios, y mil veces quiso abandonar
                                todo. Sus nietos se lo impidieron.
                              </p>
                              <ul className="mu-team-social">
                                <li>
                                  <a href="#">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FontAwesomeIcon icon={faTwitter} />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FontAwesomeIcon icon={faInstagram} />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/*                         <!-- TERMINA INTEGRANTE 4  --> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/*                 <!-- TERMINA CUADRO DE INTEGRANTES --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- TERMINA SECCION DE EQUIPO --> */}
    </div>
    </>
  );
}
