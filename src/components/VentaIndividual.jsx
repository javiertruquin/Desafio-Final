import React from "react";

export default function VentaIndividual({ carrito }) {
  return (
    <>
      <br />
      <strong className="pr-2">Código:</strong>{carrito.producto.codigo}
      <br />
      <strong className="pr-2">Producto:</strong>{carrito.producto.titulo}
      <br />
      <strong className="pr-2">Cantidad:</strong>{carrito.cantidad}
      <br />
    </>
  );
}
