import { MDBContainer, MDBRow, MDBInput, MDBCol } from "mdbreact";
import { Form } from "react-bootstrap";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div>
      {/* <!-- Start Page Header area --> */}
      <div id="mu-page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-page-header-area">
                <h1 className="mu-page-header-title">SUCURSAL TUCUMÁN</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Page Header area --> */}

      {/* <!-- Start main content --> */}
      <main>
        {/* <!-- Start Contact --> */}
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
                          Estamos acá para ayudarte. Si tu sucursal más cercana
                          es la de TUCUMÁN, dejános acá tu mensaje. Nos
                          comunicaremos con vos a la brevedad. Abajo te dejamos
                          nuestra dirección si querés acercarte personalmente.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Start Contact Content --> */}
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
                          <MDBInput type="text" label="Dejános Tu Mensaje" />
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

                  {/* <!-- End Contact Content --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Contact --> */}

        {/* <!-- Google map --> */}
        <div id="mu-google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.8176744277202!2d-81.47150788457147!3d28.424757900613237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77e378ec5a9a9%3A0x2feec9271ed22c5b!2sOrange+County+Convention+Center!5e0!3m2!1sen!2sbd!4v1503833952781"
            width="850"
            height="400"
            allowfullscreen
          ></iframe>
        </div>
      </main>
    </div>
  );
}
