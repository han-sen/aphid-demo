import React, { useState } from "react";
import BugTitle from "./BugTitle";
import BugBody from "./BugBody";

export default function Bug(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <BugTitle title={props.bug.title} toggle={toggleIsOpen} />
            {isOpen ? <BugBody bug={props.bug} /> : null}
            <hr></hr>
        </div>
    );
}
