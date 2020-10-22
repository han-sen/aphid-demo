import React, { useState } from "react";
import BugStatus from "./BugStatus";
import BugSeverity from "./BugSeverity";
import Modal from "./Modal";
import EditBug from "./EditBug";
import BugError from "./BugError";

export default function BugBody(props) {
    const [modalIsActive, setModalIsActive] = useState(false);
    return (
        <div className="bug_body_wrap">
            <p className="bug_body_row">
                <span className="bug_label">
                    <i className="fas fa-quote-left"></i>Summary:{" "}
                </span>{" "}
                {props.bug.summary}
            </p>
            <BugSeverity severity={props.bug.severity} />
            <p className="bug_body_row">
                <span className="bug_label">
                    <i className="fas fa-file-alt"></i>Blame File:
                </span>{" "}
                {props.bug.blameFile}
            </p>
            <BugError error={props.bug.readOut} />
            <BugStatus status={props.bug.status} />
            <div className="bug_controls_wrap">
                <button
                    className="button is-primary edit_button"
                    onClick={() => setModalIsActive(true)}
                >
                    <i className="fas fa-edit"></i>Edit
                </button>
                <button
                    className="button is-danger"
                    onClick={() => props.deleteBug(props.bug.id)}
                >
                    <i className="fas fa-trash-alt"></i>Delete
                </button>
            </div>
            <Modal
                modalIsActive={modalIsActive}
                setModalIsActive={setModalIsActive}
                modalTitle="Edit Bug"
                submitText="Save Changes"
            >
                <EditBug
                    bug={props.bug}
                    bugs={props.bugs}
                    updateBugs={props.updateBugs}
                    setModalIsActive={setModalIsActive}
                />
            </Modal>
        </div>
    );
}
