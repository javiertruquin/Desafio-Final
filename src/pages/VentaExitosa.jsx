import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function VentaExitosa() {
    return (
        <div>
            <div className="modal-dialog modal-confirm">
                <div className="modal-content fuente">
                    <div className="modal-header">
                        <div className="icon-box">
                            <i class="fas fa-check"></i>
                        </div>
                        <h4 className="modal-title w-100">Awesome!</h4>
                    </div>
                    <div className="modal-body">
                        <p className="text-center">
                            Your booking has been confirmed. Check your email
                            for detials.
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button
                            className="btn btn-success btn-block"
                            data-dismiss="modal"
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
