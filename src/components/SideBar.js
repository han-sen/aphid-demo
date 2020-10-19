import React from "react";
import FilterForm from "./FilterForm";
import BugChart from "./BugChart";

export default function SideBar(props) {
    return (
        <div className="sidebar_wrap">
            <div className="user_wrap">
                <h2>Major Tom</h2>
                <p>majortom@test.com</p>
            </div>
            <button
                onClick={() => props.setModalIsActive(true)}
                className="button is-primary"
            >
                <i className="fas fa-bug"></i> Add Bug
            </button>
            <BugChart bugs={props.bugs} />
            <FilterForm bugs={props.bugs} changeFilter={props.changeFilter} />
        </div>
    );
}
