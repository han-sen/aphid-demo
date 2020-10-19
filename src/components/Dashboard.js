import React, { useState } from "react";
import seedData from "../seed.js";
import Bug from "./Bug";
import NewBug from "./NewBug";
import Modal from "./Modal";
import SideBar from "./SideBar";

export default function Dashboard() {
    const [bugs, updateBugs] = useState(seedData);
    const [bugFilter, setBugFilter] = useState({
        status: "open",
        project: "",
    });
    const [modalIsActive, setModalIsActive] = useState(false);
    const deleteBug = (id) => {
        const newState = bugs.filter((bug) => bug.id !== id);
        updateBugs(newState);
    };
    const changeFilter = (e) => {
        console.log(e.target.value);
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
                    .map((bug, i) => {
                        return (
                            <Bug
                                bug={bug}
                                bugs={bugs}
                                changeFilter={changeFilter}
                                deleteBug={deleteBug}
                                updateBugs={updateBugs}
                                key={bug.title + i}
                            />
                        );
                    })}
            </div>
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
