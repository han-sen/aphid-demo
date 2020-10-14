import React from "react";
import BugStatus from "./BugStatus";
import BugSeverity from "./BugSeverity";

export default function BugBody(props) {
    return (
        <div>
            <BugSeverity severity={props.bug.severity} />
            <p>{props.bug.project}</p>
            <p>{props.bug.blameFile}</p>
            <p>{props.bug.summary}</p>
            <p>{props.bug.readOut}</p>
            <BugStatus status={props.bug.status} />
        </div>
    );
}
