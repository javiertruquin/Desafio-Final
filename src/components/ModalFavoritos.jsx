import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import CardFavoritos from "../components/CardFavoritos";

export default function ModalFavoritos({
    crear,
    handleClose,
    productosFavoritos,
    setUser,
    getFavoritos,
}) {
    useEffect(() => {
        // El useEffect se llama al abrir y cerrar el modal y actualiza los favoritos.
        return getFavoritos;
    }, [crear]);

    return (
        <Modal
            className="modal-favoritos"
            bsPrefix="modal"
            size="lg"
            show={crear}
            onHide={handleClose}
        >
            <Modal.Body scrollable="true">
                <div className="row">
                    <div className="col-7">
                        <span className="titulo-azul">
                            No te quedés con las ganas
                        </span>
                        <p className="ps-lg-3 pt-3 pt-lg-0 texto-favoritos fuente">
                            Los favoritos pueden ser tuyos ya!
                        </p>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-2 text-center pt-3">
                        <i
                            style={{ color: "#00598a", fontSize: "22pt" }}
                            className="fas fa-heart text-center "
                        ></i>
                        <p
                            className="sub-mision pt-1"
                            style={{ fontSize: "70%" }}
                        >
                            FAVORITOS
                        </p>
                    </div>
                </div>

                <hr
                    className=" mt-4"
                    style={{ border: "0.3px solid #ababab" }}
                />
                {productosFavoritos?.map((favorito) => (
                    <CardFavoritos
                        handleClose={handleClose}
                        key={favorito._id}
                        setUser={setUser}
                        favorito={favorito}
                        productosFavoritos={productosFavoritos}
                        getFavoritos={getFavoritos}
                    />
                ))}
            </Modal.Body>
        </Modal>
    );
}
