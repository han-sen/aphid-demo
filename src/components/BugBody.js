import React, { useState } from "react";
import BugStatus from "./BugStatus";
import BugSeverity from "./BugSeverity";
import Modal from "./Modal";
import EditBug from "./EditBug";

export default function BugBody(props) {
    const [modalIsActive, setModalIsActive] = useState(false);
    return (
        <div className="bug_body_wrap">
            <BugSeverity severity={props.bug.severity} />
            <p>Project: {props.bug.project}</p>
            <p>Blame File: {props.bug.blameFile}</p>
            <p>Summary: {props.bug.summary}</p>
            <p>Error Readout: {props.bug.readOut}</p>
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
            <button onClick={() => setModalIsActive(true)}>Edit</button>
            <button onClick={() => props.deleteBug(props.bug.id)}>
                Delete
            </button>
        </div>
    );
}
