

export default function BuscadorCategorias() {
  return (

        <div className="row container-buscador">
            <div className="col-lg-6">
                <span className="texto-categoria">Elija por categoría:</span>
                <button className="btn-categoria my-2 mx-2">Serie Advance</button>
                <button className="btn-categoria my-2 mx-2">Serie Office</button>
                <button className="btn-categoria my-2 mx-2">Serie Home</button>
            </div>
            <div className="col-lg-6">
                <div>
                    <label htmlFor="" className="texto-categoria me-2">Buscar</label>
                    <input type="text" name="buscar" id="" style={{width:'60%'}} className="input-buscar"/>
                    <button className="btn-categoria my-2 mx-2"><i className="fas fa-search"></i></button>
                </div>
            </div>
        </div>

  );
}
