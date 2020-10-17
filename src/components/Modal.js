import React from "react";

export default function Modal(props) {
    return (
        <div className={props.modalIsActive ? "modal is-active" : "modal"}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{props.modalTitle}</p>
                    <button
                        className="delete"
                        aria-label="close"
                        onClick={() => props.setModalIsActive(false)}
                    ></button>
                </header>
                <section className="modal-card-body">{props.children}</section>
            </div>
        </div>
    );
}
