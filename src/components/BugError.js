import React from "react";

export default function BugError(props) {
    return (
        <div className="bug_body_row error_row">
            <p>
                <span className="bug_label">Error Readout:</span>
            </p>
            <p className="bug_error_readout">
                {props.error ? props.error : "No Error Message Available"}
            </p>
        </div>
    );
}
