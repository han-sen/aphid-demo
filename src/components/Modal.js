import React, { useState } from "react";

export default function Modal(props) {
    return (
        <div className={props.modalIsActive ? "modal is-active" : "modal"}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Add New Bug</p>
                    <button
                        className="delete"
                        aria-label="close"
                        onClick={() => props.setModalIsActive(false)}
                    ></button>
                </header>
                <section className="modal-card-body">{props.children}</section>
                {/* <footer className="modal-card-foot">
                    <button className="button is-success">Save changes</button>
                    <button
                        className="button"
                        onClick={() => setIsActive(false)}
                    >
                        Cancel
                    </button>
                </footer> */}
            </div>
        </div>
    );
}
