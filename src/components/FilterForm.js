import React from "react";

export default function FilterForm(props) {
    return (
        <div className="filter_form_wrap">
            <label htmlFor="filter">Filter by:</label>

            <div className="select">
                <select
                    name="status"
                    id="filterForm"
                    onChange={props.changeFilter}
                >
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                    <option value="">All</option>
                </select>
            </div>
            <div className="select">
                <select
                    name="project"
                    id="filterForm"
                    onChange={props.changeFilter}
                >
                    <option value="">All</option>
                    {props.bugs.map((bug) => {
                        return (
                            <option value={bug.project}>{bug.project}</option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
}
