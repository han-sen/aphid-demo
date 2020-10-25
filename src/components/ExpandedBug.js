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
                <div className="bug_empty_wrap">
                    <span className="expanded_bug_icon">
                        <i className="fas fa-bug"></i>
                    </span>
                    <p>Select a bug to view details</p>
                </div>
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    // console.log(state.bugs);
    return { selectedBug: state.selectedBug };
};

export default connect(mapStateToProps)(ExpandedBug);
