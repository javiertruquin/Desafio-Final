import { React, Component, useState, useEffect } from "react";
import {
  Button,
  Card,
  Form,
  FormControl,
  InputGroup,
  Nav,
} from "react-bootstrap";
import imageProfile from "../assets/img/profile-1.jpeg";
import MisDatos from "../components/MisDatos";
import MisCompras from "../components/MisCompras";
import MisMensajes from "../components/MisMensajes";
import axios from "axios";

export default function Profile({ user, token }) {
    const [subNav, setSubNav] = useState('1');
    const [usuarioCompleto, setUsuarioCompleto] = useState({});

    const handleSelect = (eventKey) => {
        setSubNav(eventKey)
    }
    // const getUsuario = async () => {
    //   const { data } = await axios.get(`/auth/complete`);
    //   // console.log('usuario', data)
    //   setUsuarioCompleto(data);
    // };
    // useEffect(() => {
    //       getUsuario();
    //   }, []);

    // if (token) {
      const getUsuario = async () => {
        const { data } = await axios.get(`/auth/complete`);
        // console.log('usuario', data)
        setUsuarioCompleto(data);
      };
    // }
    useEffect(() => {
      getUsuario();
    }, [token]);
    


    return (
      <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-3 mb-4">
            <div className="card border-0 shadow">
              <img src={imageProfile} className="card-img-top" />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">{usuarioCompleto.nombre} {usuarioCompleto.apellido}</h5>
                {/* <div className="card-text text-black-50">Web Developer</div> */}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-9 mb-4">
            <Card>
              <Card.Header> 
                <Nav variant="tabs" activeKey="1" onSelect={handleSelect}>
                  <Nav.Item>
                    <Nav.Link eventKey="1">Mis datos</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="2">Mis Compras</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="3">Mis mensajes</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>              
              { subNav === '1' && <MisDatos getUsuario={getUsuario} userComplete={usuarioCompleto} />}
              { subNav === '2' && <MisCompras />}
              { subNav === '3' && <MisMensajes />}
            </Card>
          </div>
        </div>
      </div>
      </>
  );
}