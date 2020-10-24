import React from "react";
import Bug from "./Bug";
import { connect } from "react-redux";
import { selectBug } from "../actions";

function BugFeed(props) {
    const checkFilters = (bug) => {
        if (props.filters.status) {
            return bug.status === props.filters.status;
        }
        return true;
    };
    return props.bugs
        .filter((bug) => checkFilters(bug))
        .map((bug, i) => {
            return (
                <Bug
                    bug={bug}
                    key={bug.title + i}
                    selectedBug={props.selectedBug}
                    selectBug={props.selectBug}
                />
            );
        });
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        bugs: state.bugs,
        selectedBug: state.selectedBug,
        filters: state.filters,
    };
};

export default connect(mapStateToProps, {
    selectBug,
})(BugFeed);
