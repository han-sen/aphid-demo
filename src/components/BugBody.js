import React from "react";
import BugStatus from "./BugStatus";
import BugSeverity from "./BugSeverity";

export default function BugBody(props) {
    return (
        <div className="bug_body_wrap">
            <BugSeverity severity={props.bug.severity} />
            <p>Project: {props.bug.project}</p>
            <p>Blame File: {props.bug.blameFile}</p>
            <p>Summary: {props.bug.summary}</p>
            <p>Error Readout: {props.bug.readOut}</p>
            <BugStatus status={props.bug.status} />
            <button onClick={() => props.deleteBug(props.bug.id)}>
                Delete
            </button>
        </div>
    );
}
