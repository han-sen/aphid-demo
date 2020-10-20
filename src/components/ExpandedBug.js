import React from "react";
import BugBody from "./BugBody";

export default function ExpandedBug(props) {
    return (
        <div className="expanded_wrap">
            <h2>{props.bugs[props.activeBug].title}</h2>
            <BugBody
                bug={props.bugs[props.activeBug]}
                bugs={props.bugs}
                deleteBug={props.deleteBug}
                updateBugs={props.updateBugs}
            />
        </div>
    );
}
