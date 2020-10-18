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
                <span className="bug_label">Blame File:</span>{" "}
                {props.bug.blameFile}
            </p>
            <p className="bug_body_row">
                <span className="bug_label">Summary: </span> {props.bug.summary}
            </p>
            <BugError error={props.bug.readOut} />
            <BugSeverity severity={props.bug.severity} />
            <BugStatus status={props.bug.status} />
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
            <button
                className="button is-primary edit_button"
                onClick={() => setModalIsActive(true)}
            >
                Edit
            </button>
            <button
                className="button is-danger"
                onClick={() => props.deleteBug(props.bug.id)}
            >
                Delete
            </button>
        </div>
    );
}
