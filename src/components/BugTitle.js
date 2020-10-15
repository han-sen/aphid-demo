import React from "react";

export default function BugTitle(props) {
    return (
        <div className="bug_row title_row">
            <h2 onClick={props.toggle}>
                <span className={`severity severity--${props.severity}`}></span>
                {props.title}
            </h2>
            <h3>{props.project}</h3>
        </div>
    );
}
