import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import seedData from "../seed.js";
import Bug from "./Bug";
import NewBug from "./NewBug";
import Modal from "./Modal";
import SideBar from "./SideBar";
import ExpandedBug from "./ExpandedBug";

function Dashboard() {
    const [bugs, updateBugs] = useState(seedData);
    const [bugFilter, setBugFilter] = useState({
        status: "open",
        project: "",
    });
    const [activeBug, setActiveBug] = useState(bugs.length - 1);
    const [modalIsActive, setModalIsActive] = useState(false);
    const deleteBug = (id) => {
        const newState = bugs.filter((bug) => bug.id !== id);
        updateBugs(newState);
    };
    const changeActiveBug = (id) => {
        const num = id - 1;
        setActiveBug(num);
    };
    const changeFilter = (e) => {
        setBugFilter({ ...bugFilter, [e.target.name]: e.target.value });
    };
    const checkFilters = (bug) => {
        if (bugFilter.status !== "" && bugFilter.project !== "") {
            return (
                bug.status === bugFilter.status &&
                bug.project === bugFilter.project
            );
        } else if (bugFilter.status !== "" && bugFilter.project === "") {
            return bug.status === bugFilter.status;
        } else if (bugFilter.project !== "" && bugFilter.status === "") {
            return bug.project === bugFilter.project;
        } else {
            return true;
        }
    };
    return (
        <section className="dashboard_wrap">
            <SideBar
                bugs={bugs}
                changeFilter={changeFilter}
                setModalIsActive={setModalIsActive}
            />
            <div className="bugs_wrap">
                {bugs
                    .filter((bug) => checkFilters(bug))
                    .sort((a, b) => (a.id > b.id ? -1 : 1))
                    .map((bug, i) => {
                        return (
                            <Bug
                                bug={bug}
                                bugs={bugs}
                                isActive={
                                    bug.id - 1 === activeBug ? true : false
                                }
                                changeActiveBug={changeActiveBug}
                                deleteBug={deleteBug}
                                updateBugs={updateBugs}
                                key={bug.title + i}
                            />
                        );
                    })}
            </div>
            <ExpandedBug
                bugs={bugs}
                activeBug={activeBug}
                changeFilter={changeFilter}
                deleteBug={deleteBug}
                updateBugs={updateBugs}
            />
            <Modal
                modalIsActive={modalIsActive}
                setModalIsActive={setModalIsActive}
                modalTitle="Add Bug"
                submitText="Add Bug"
            >
                <NewBug
                    bugs={bugs}
                    updateBugs={updateBugs}
                    setModalIsActive={setModalIsActive}
                />
            </Modal>
        </section>
    );
}

export default connect()(Dashboard);
