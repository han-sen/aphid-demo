import React from "react";
import FilterForm from "./FilterForm";

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
            <FilterForm bugs={props.bugs} changeFilter={props.changeFilter} />
        </div>
    );
}
