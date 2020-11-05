import React from "react";
import FilterForm from "./FilterForm";
import BugChart from "./BugChart";

export default function SideBar(props) {
    return (
        <div className="sidebar_wrap">
            <div className="admin_wrap">
                <div className="user_wrap">
                    <div className="user_avatar">
                        <div className="user_avatar_inner">
                            <p>M</p>
                        </div>
                    </div>
                    <div className="user_details">
                        <h2>Major Tom</h2>
                        <p className="user_email">majortom@test.com</p>
                    </div>
                </div>
                <button
                    onClick={() => props.setModalIsActive(true)}
                    className="button is-primary"
                >
                    <i className="fas fa-bug"></i> Add Bug
                </button>
            </div>
            <BugChart bugs={props.bugs} />
            <FilterForm bugs={props.bugs} changeFilter={props.changeFilter} />
        </div>
    );
}
