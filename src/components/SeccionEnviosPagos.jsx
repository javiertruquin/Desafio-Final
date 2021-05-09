

function SeccionEnviosPagos() {
    return (
        <div className="container my-5">
            <div className="row contenedor-circulos">
                <div className="col-4 p-3 ">
                    <div className="row">
                        <div className="col-3  ps-5">
                            <div className="rounded-circle circulo-envpag text-center">
                                <i class="far fa-credit-card pt-3"></i>
                            </div>
                        </div>
                        <div className="col-9">
                        <div className="text-destacado-envpag">Todas las tarjertas de crédito</div>
                        <div className="text-envpag">Conocé con cuales operamos</div>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="col-4 p-3 ">
                <div className="row">
                        <div className="col-3  ps-5" style={{  borderLeft: "6px solid #005889" }}>
                            <div className="rounded-circle circulo-envpag text-center">
                                <i class="fas fa-money-bill-wave pt-3"></i>
                            </div>
                        </div>
                        <div className="col-9">
                        <div className="text-destacado-envpag">Pagos en efectivo</div>
                        <div className="text-envpag">Recibimos pagos por PagoFacil</div>
                        </div>
                    </div>
                </div>
                <div className="col-4 p-3 ">
                <div className="row">
                        <div className="col-3  ps-5" style={{  borderLeft: "6px solid #005889" }}>
                            <div className="rounded-circle circulo-envpag text-center">
                                <i class="fas fa-shipping-fast pt-3"></i>
                            </div>
                        </div>
                        <div className="col-9">
                        <div className="text-destacado-envpag">Envios a todo el país</div>
                        <div className="text-envpag">Trabajamos con Andreani Cargas</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeccionEnviosPagos
