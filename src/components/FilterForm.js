import React from "react";

export default function FilterForm(props) {
    return (
        <div className="filter_form_wrap">
            <label htmlFor="filter">Filter by:</label>
            <div className="select is-rounded is-small">
                <select
                    name="status"
                    id="statusForm"
                    onChange={props.changeFilter}
                >
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                    <option value="">All</option>
                </select>
            </div>
            <div className="select is-rounded is-small">
                <select
                    name="project"
                    id="projectForm"
                    onChange={props.changeFilter}
                >
                    <option value="" key={1}>
                        All
                    </option>
                    {props.bugs.map((bug, i) => {
                        return (
                            <option value={bug.project} key={i + 1}>
                                {bug.project}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
}
