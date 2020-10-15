import React from "react";

export default function FilterForm(props) {
    return (
        <div className="filter_form_wrap">
            <form className="select">
                <label htmlFor="filter">Filter by:</label>
                <select
                    name="filter"
                    id="filterForm"
                    onChange={props.changeFilter}
                >
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                </select>
            </form>
        </div>
    );
}