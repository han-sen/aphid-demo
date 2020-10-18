import React, { useState } from "react";
import BugTitle from "./BugTitle";
import BugBody from "./BugBody";

export default function Bug(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <article className={isOpen ? "bug_wrap is_open" : "bug_wrap"}>
            <BugTitle
                title={props.bug.title}
                project={props.bug.project}
                severity={props.bug.severity}
                toggle={toggleIsOpen}
            />
            {isOpen ? (
                <BugBody
                    bug={props.bug}
                    bugs={props.bugs}
                    deleteBug={props.deleteBug}
                    updateBugs={props.updateBugs}
                />
            ) : null}
        </article>
    );
}
