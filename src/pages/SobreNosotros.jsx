import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import foto1 from "../assets/img/about-us.jpg";
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
    <div>
      {/* // <!-- EMPIEZA AREA DEL HEADER --> */}
      <div id="mu-page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-page-header-area">
                <h1 className="mu-page-header-title">Sobre Nosotros</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                      <h2>Quienes somos</h2>
                      <p>
                        Somos una empresa con 12 años de trayectoria orientada
                        exclusivamente a la comercialización de notebooks, pcs e
                        insumos de computación.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- EMPIEZA PARTE DE NUESTRAS MISIONES --> */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="mu-about-left">
                      <img src={foto1} alt="img" />
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
                      <h2>Nuestros Locales</h2>
                      <p>
                        Estamos en cada parte del país. Porque te queremos cerca
                        podés pasar por cualquiera de nuestros locales:
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
                                id="circle-1"
                                class="mu-circle"
                                data-circle-dialWidth="15"
                              >
                                <div className="loader-bg">
                                  <div className="text">TUCUMÁN</div>
                                </div>
                              </div>
                            </div>
                            <Nav.Link
                              to="/tucuman"
                              as={NavLink}
                              className="boton-aqui"
                            >
                              TUCUMÁN
                            </Nav.Link>
                            <p>
                              Arturo Cacatúa 5520 - San Miguel de Tucumán -
                              Tucumán. Tel: 338-430158
                            </p>
                          </div>
                        </div>
                        {/* <!-- TERMINA CONTENIDO INDIVIDUAL DE CUADROS 1 -->
                        <!-- CONTENIDO INDIVIDUAL DE CUADROS 2--> */}
                        <div className="col-md-3">
                          <div className="mu-single-skills">
                            <div className="mu-skills-circle">
                              <div
                                id="circle-2"
                                className="mu-circle"
                                data-circle-dialWidth="15"
                              >
                                <div className="loader-bg">
                                  <div className="text">CAPITAL FEDERAL</div>
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
                                id="circle-3"
                                className="mu-circle"
                                data-circle-dialWidth="15"
                              >
                                <div className="loader-bg">
                                  <div className="text">ROSARIO</div>
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
                                id="circle-4"
                                className="mu-circle"
                                data-circle-dialWidth="15"
                              >
                                <div className="loader-bg">
                                  <div className="text">SAN NICOLÁS</div>
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
  );
}
