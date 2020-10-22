import React from "react";

export default function BugStatus(props) {
    return (
        <div className="bug_body_row">
            <span className={`status--${props.status} bug_label`}>
                <i className="fas fa-question-circle"></i>Status:{" "}
            </span>
            <p>{props.status}</p>
        </div>
    );
}
