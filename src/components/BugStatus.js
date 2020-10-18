import React from "react";

export default function BugStatus(props) {
    return (
        <div className="bug_body_row">
            <span className={`status--${props.status}`}></span>
            <p>Status: {props.status}</p>
        </div>
    );
}
