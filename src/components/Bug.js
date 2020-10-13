import React from "react";

export default function Bug(props) {
    return (
        <div>
            <p>{props.bug.title}</p>
            <p>{props.bug.project}</p>
            <p>{props.bug.severity}</p>
            <p>{props.bug.blameFile}</p>
            <p>{props.bug.summary}</p>
            <p>{props.bug.readOut}</p>
            <p>{props.bug.status}</p>
            <hr></hr>
        </div>
    );
}
