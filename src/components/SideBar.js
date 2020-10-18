import React from "react";
import FilterForm from "./FilterForm";

export default function SideBar(props) {
    return (
        <div className="sidebar_wrap">
            <button
                onClick={() => props.setModalIsActive(true)}
                className="button is-primary"
            >
                Add Bug
            </button>
            <FilterForm bugs={props.bugs} changeFilter={props.changeFilter} />
        </div>
    );
}
