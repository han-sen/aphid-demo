import React, { useState } from "react";
import seedData from "../seed.js";
import Bug from "./Bug";
import FilterForm from "./FilterForm";
import NewBug from "./NewBug";
import Modal from "./Modal";

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
            <button
                onClick={() => setModalIsActive(true)}
                className="button is-primary"
            >
                Add Bug
            </button>
            <FilterForm bugs={bugs} changeFilter={changeFilter} />
            <Modal
                modalIsActive={modalIsActive}
                setModalIsActive={setModalIsActive}
                modalTitle="Add Bug"
            >
                <NewBug
                    bugs={bugs}
                    updateBugs={updateBugs}
                    setModalIsActive={setModalIsActive}
                />
            </Modal>
            {bugs
                .filter((bug) => checkFilters(bug))
                .map((bug, i) => {
                    return (
                        <Bug
                            bug={bug}
                            changeFilter={changeFilter}
                            deleteBug={deleteBug}
                            updateBugs={updateBugs}
                            key={bug.title + i}
                        />
                    );
                })}
        </section>
    );
}
