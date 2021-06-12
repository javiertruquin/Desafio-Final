import React from "react";
import { Button } from "react-bootstrap";
import "../Mensajes.css";

export default function MisMensajes() {
  return (
    <>
      <div className="container">
        <div className="contenedor-mensajes">
          <h2>Chat Messages</h2>
          <div className="container pt-3">
            {/* <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"  style="width:100%;" /> */}
            <p>Hello. How are you today?</p>
            <span className="time-right">11:00</span>
          </div>

          <div className="container pt-3 darker">
            {/* <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"  className="right" style="width:100%;" /> */}
            <p>Hey! I'm fine. Thanks for asking!</p>
            <span className="time-left">11:01</span>
          </div>

          <div className="container pt-3">
            {/* <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"  style="width:100%;" /> */}
            <p>Sweet! So, what do you wanna do today?</p>
            <span className="time-right">11:02</span>
          </div>

          <div className="container pt-3 darker">
            {/* <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Avatar" className="right" style="width:100%;" /> */}
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
        </div>
        <Button size="xl" className="mb-4" variant="outline-dark">
            Realizar otra consulta
          </Button>{" "}
      </div>
    </>
  );
}
