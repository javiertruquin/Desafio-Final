import { React, useState, useEffect } from "react";
import {
  Card,
  Nav,
} from "react-bootstrap";
import imageProfile from "../assets/img/profile-default.jpg";
import MisDatos from "../components/MisDatos";
import MisCompras from "../components/MisCompras";
import MisMensajes from "../components/MisMensajes";
import axios from "axios";
import { getBase64 } from '../utils';

export default function Profile({ user, token, setImage, image }) {
    const [subNav, setSubNav] = useState('1');
    const [usuarioCompleto, setUsuarioCompleto] = useState({});

    const handleSelect = (eventKey) => {
        setSubNav(eventKey)
    }

      const getUsuario = async () => {
        const { data } = await axios.get(`/auth/complete`);
        setUsuarioCompleto(data);
      };
    useEffect(() => {
      getUsuario();
    }, [token]);

    const onChangeImg = async (e) => {
        const file = e.target.files[0];
        const image = await getBase64(file);
        setImage(image);
        await axios.put('/auth', {image, id: user._id });
    };


    return (
      <>
      <div className="container mt-5 fuente">
        <div className="row">
          <div className="col-12 col-md-3 mb-4">
            <div className="card border-0 shadow">
              <img src={image || user.image || imageProfile} className="card-img-top" />
              <div className="card-body text-center d-flex">
                <div>
                <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
                    <img
                        src="https://icongr.am/feather/camera.svg?size=128&color=293f8e"
                        alt="camera edit"
                        width="20"
                    />
                </label>
                <input
                    id="file-input"
                    className="d-none"
                    accept="image/png, image/jpeg"
                    type="file"
                    onChange={onChangeImg}
                />
                </div>
                <h5 className="card-title mb-0 col-12">{usuarioCompleto.nombre} {usuarioCompleto.apellido}</h5>
                
                {/* <div className="card-text text-black-50">Web Developer</div> */}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-9 mb-4">
            <Card>
              <Card.Header> 
                <Nav variant="tabs" defaultActiveKey="1" onSelect={handleSelect}>
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