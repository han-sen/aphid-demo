import React from "react";

export default function BugStatus(props) {
    return (
        <div>
            <span className={`status--${props.status}`}></span>
            <p>{props.status}</p>
        </div>
    );
}
