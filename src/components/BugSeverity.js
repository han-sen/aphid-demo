import React from "react";

export default function BugSeverity(props) {
    return (
        <div>
            <p>
                <span className={`severity severity--${props.severity}`}></span>
                {props.severity}
            </p>
        </div>
    );
}
