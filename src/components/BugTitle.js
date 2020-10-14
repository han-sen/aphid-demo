import React from "react";

export default function BugTitle(props) {
    return <h2 onClick={props.toggle}>{props.title}</h2>;
}
