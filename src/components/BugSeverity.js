import React from "react";

export default function BugSeverity(props) {
    return (
        <div className="bug_body_row">
            <p>
                <span className="bug_label">Severity: </span>
                <span className={`severity_label severity--${props.severity}`}>
                    {props.severity}
                </span>
            </p>
        </div>
    );
}
