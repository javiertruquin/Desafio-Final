import { MDBContainer, MDBRow, MDBInput, MDBCol } from "mdbreact";
import { Form } from "react-bootstrap";
import logo from "../assets/img/logo.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div>
      <div id="mu-page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-page-header-area">
                <h1 className="mu-page-header-title">SUCURSAL SAN NICOLÁS</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main>
        <section id="mu-contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-contact-area">
                  {/* <!-- Title --> */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mu-title">
                        <h2>Escribinos tu consulta</h2>
                        <p>
                          Dejános tu mensaje y nos comunicaremos con vos a la
                          brevedad. También te dejamos la dirección y horarios
                          de la sucursal si querés acercarte personalmente.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Form
                    style={{ width: "777px" }}
                    className="container card mx-auto pt-2 pr-4 pl-4 mt-4"
                  >
                    <MDBContainer className="mb-4">
                      <MDBRow>
                        <MDBCol>
                          <MDBInput type="text" label="Tu Nombre" />
                        </MDBCol>
                        <MDBCol>
                          <MDBInput type="email" label="Tu Email" />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol>
                          <MDBInput type="text" label="Título Consulta" />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol>
                          <MDBInput
                            className="mt-3"
                            type="textarea"
                            label="Dejános Tu Consulta"
                            rows="6"
                          />
                        </MDBCol>
                      </MDBRow>
                    </MDBContainer>
                    <button
                      type="submit"
                      style={{ width: "40%" }}
                      className="mx-auto mt-4 mb-5 btn-categoria"
                    >
                      ENVÍA TU CONSULTA
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* footerrr  */}

        <div className="footer py-4">
          <div className="container ">
            <div className="row">
              <div
                className="col-xl-3 col-md-6 mt-auto"
                style={{ order: "-2" }}
              >
                <img src={logo} alt="" style={{ width: "200px" }} />
                <ul className="pt-2">
                  <li className="li-footer py-2">José Ingenieros 389</li>
                  <li className="li-footer py-2">San Nicolás - Buenos Aires</li>
                  <li className="li-footer py-2">336-4540977</li>
                </ul>
              </div>
              <div className="col-xl-6 col-md-12 ">
                <div className="titulos-footer pt-3">Donde nos encontramos</div>
                <div className="map-responsive">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.113034520811!2d-65.20939648495664!3d-26.83635688316051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0e8d0271b7%3A0xa2685800d87df915!2sPiso%209%2C%20Barrio%20Sur%2C%20Gral.%20Paz%20576%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1620589517701!5m2!1ses!2sar"
                    title="ubicacion"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 mt-auto"
                style={{ order: "-1" }}
              >
                <p className="titulos-footer ps-3">Horarios de atención:</p>
                <ul>
                  <li className="li-footer py-2">
                    Lunes a viernes: 9:15 a 18:30
                  </li>
                  <li className="li-footer py-2">Sábados: 10:00 a 14:00</li>
                  <li className="li-footer py-2">
                    contactosannic@rollingtech.com.ar
                  </li>
                </ul>
              </div>
              <hr className=" mt-4" style={{ border: "1px solid #ababab" }} />
              <div className="row pt-3 sub-footer">
                <div className="col-lg-6 detalle-producto">
                  <b> © Rolling Tech </b>- Todos los derechos reservados. Desde
                  2020 junto a vos
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Google map --> */}
        {/*         <div className="container map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.8176744277202!2d-81.47150788457147!3d28.424757900613237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77e378ec5a9a9%3A0x2feec9271ed22c5b!2sOrange+County+Convention+Center!5e0!3m2!1sen!2sbd!4v1503833952781"
            allowfullscreen
          ></iframe>
        </div> */}
      </main>
    </div>
  );
}
