import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import empresa from "../assets/img/empresa.jpg";
import empresa2 from "../assets/img/empresa2.jpg";
import miembro1 from "../assets/img/fede.png";
import miembro2 from "../assets/img/javier.png";
import miembro3 from "../assets/img/tomas-nosotros.jpeg";
import miembro4 from "../assets/img/andres.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import CajaDeMensajes from "../components/CajaDeMensajes";

export default function SobreNosotros() {
  return (
    <>
      <div className="container fuente mt-lg-5 mt-3">
        <div className="row">
          <div className="col-lg-5 text-lg-right ps-lg-5 pe-lg-5 pt-lg-3 mb-4">
            <span className="titulo-nosotros">
              Somos líderes en tecnología y provisión de equipos
            </span>
            <div className="subtitulo-nosotros">Conocenos!</div>
          </div>
          <div className="col-lg-7">
            <img src={empresa} alt="" className="img-nosotros-head" />
          </div>
        </div>
        <hr className=" mt-5" style={{ border: ".3px solid #e2e2e2" }} />
        <div className="row">
          <div className="col d-flex justify-content-center mt-5">
            <p className="destacado-nosotros">
              <strong>RollingTech</strong> es una empresa nacional con 12 años
              de trayectoria en el mercado orientada exclusivamente a la venta y
              comercialización de notebooks, computadoras de escritorio e
              insumos de computación para el más alto performance de uso.
            </p>
          </div>
        </div>
        <hr
          className=" mt-5 d-flex "
          style={{ border: ".3px solid #e2e2e2" }}
        />
        <div className="row mt-5">
          <div className="col-lg-6">
            <img src={empresa2} alt="img" className="img-empresa2" />
          </div>
          <div className="col-lg-6 mt-3 ps-4">
            <span className="titulo-mision mt-4">Misión</span>
            <p className="sub-mision mt-3">
              Poner a disposición del cliente la mayor cantidad de opciones a la
              hora de elegir su computadora, sea de escritorio o portátil, sin
              dejar de lado el precio más competitivo posible.
            </p>
            <span className="titulo-mision mt-4">Nuestro compromiso</span>
            <p className="sub-mision mt-3">
              Guiar al cliente desde el minuto cero en la compra. Nos
              comprometemos que nuestro cliente se lleve justo lo que estaba
              buscando, asesorando en cada paso y poniendo a su disposición todo
              nuestro conocimiento en el rubro.
            </p>
            <span className="titulo-mision mt-4">Valor</span>
            <p className="sub-mision mt-3">
              Cada producto que vendemos cuenta con su garantía original, pero
              además, sumamos nuestra garantía de RollingTech. Ese valor que
              sumamos es una demostración de cuanto valoramos a nuestros
              clientes.
            </p>
          </div>
        </div>
        <hr className=" mt-5" style={{ border: ".3px solid #e2e2e2" }} />
        <section id="mu-team">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mt-5">
                  {/*                 <!-- TITLO DE EQUIPO --> */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="">
                        <h2 className="titulo-nosotros">Las personas detrás</h2>
                        <p className="text-center mb-5">
                          Como queremos ser parte de tu vida, también queremos
                          que nos conozcas. Éstos somos nosotros:
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
                                    <a
                                      href="https://ar.linkedin.com/"
                                      target="_blank"
                                    >
                                      <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://twitter.com/home"
                                      target="_blank"
                                    >
                                      <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://www.facebook.com/uno.de.estos.dias"
                                      target="_blank"
                                    >
                                      <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://www.instagram.com/federicoalvarez3/?hl=es-la"
                                      target="_blank"
                                    >
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
                                    <a
                                      href="https://ar.linkedin.com/in/javier-truquin"
                                      target="_blank"
                                    >
                                      <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://twitter.com/truquin"
                                      target="_blank"
                                    >
                                      <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://www.facebook.com/javiertruquin/"
                                      target="_blank"
                                    >
                                      <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://www.instagram.com/javier.truquin/?hl=es-la"
                                      target="_blank"
                                    >
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
                                <img
                                  src={miembro3}
                                  style={{ maxWidth: "7.5rem" }}
                                  alt="img"
                                />
                              </div>
                              <div className="mu-single-team-content">
                                <h3>Tomás Guerineau</h3>
                                <span>Fundador</span>
                                <p>
                                  Capo de los capos. Mientras todos duermen...
                                  él programa. Algunos se preguntan si realmente
                                  es humano.
                                </p>
                                <ul className="mu-team-social">
                                  <li>
                                    <a
                                      href="https://ar.linkedin.com/in/tom%C3%A1s-guerineau-b5109a160"
                                      target="_blank"
                                    >
                                      <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://twitter.com/elonmusk"
                                      target="_blank"
                                    >
                                      <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://www.facebook.com/tomas.guerineau"
                                      target="_blank"
                                    >
                                      <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://www.instagram.com/tomas_guerineau/?hl=es-la"
                                      target="_blank"
                                    >
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
                                    <a
                                      href="https://www.linkedin.com/in/andres-donadio-114415211/"
                                      target="_blank"
                                    >
                                      <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://twitter.com/andresdonadio1"
                                      target="_blank"
                                    >
                                      <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://www.facebook.com/andres.donadio.9"
                                      target="_blank"
                                    >
                                      <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://www.instagram.com/andresdonadio/?hl=es-la"
                                      target="_blank"
                                    >
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
          <hr className=" mt-5" style={{ border: ".3px solid #e2e2e2" }} />
        </section>
        {/* <!-- TERMINA SECCION DE EQUIPO --> */}
        <div>
          <CajaDeMensajes />
        </div>
      </div>
    </>
  );
}
