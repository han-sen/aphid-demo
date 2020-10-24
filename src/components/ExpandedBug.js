import React from "react";
import { connect } from "react-redux";
import BugBody from "./BugBody";

function ExpandedBug(props) {
    return (
        <div className="expanded_wrap">
            {props.selectedBug ? (
                <>
                    <h2>{props.selectedBug.title}</h2>
                    <BugBody bug={props.selectedBug} />
                </>
            ) : (
                <p>Select a bug to view details</p>
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    // console.log(state.bugs);
    return { selectedBug: state.selectedBug };
};

export default connect(mapStateToProps)(ExpandedBug);
