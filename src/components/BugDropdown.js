import React from "react";
import { connect } from "react-redux";
import { selectBug } from "../actions";

function BugDropdown(props) {
    const chooseBug = (e) => {
        const selectedBug = props.bugs.filter(
            (bug) => bug.title === e.target.value
        );
        props.selectBug(...selectedBug);
    };
    return (
        <div className="bugs_dropdown_wrap">
            <div className="select is-rounded">
                <select name="bug" id="bugForm" onChange={chooseBug}>
                    {props.bugs.map((bug, i) => {
                        return (
                            <option value={bug.title} key={i}>
                                {bug.title}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        bugs: state.bugs,
        selectedBug: state.selectedBug,
        filters: state.filters,
    };
};

export default connect(mapStateToProps, {
    selectBug,
})(BugDropdown);
