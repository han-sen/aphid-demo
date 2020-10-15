import React, { useState } from "react";
import BugTitle from "./BugTitle";
import BugBody from "./BugBody";

export default function Bug(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <article className="bug_wrap">
            <BugTitle
                title={props.bug.title}
                project={props.bug.project}
                severity={props.bug.severity}
                toggle={toggleIsOpen}
            />
            {isOpen ? <BugBody bug={props.bug} /> : null}
            <div className="bug_seperator pattern-dots-sm"></div>
        </article>
    );
}
