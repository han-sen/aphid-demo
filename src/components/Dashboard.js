import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { selectBug } from "../actions";
import Bug from "./Bug";
import NewBug from "./NewBug";
import Modal from "./Modal";
import SideBar from "./SideBar";
import ExpandedBug from "./ExpandedBug";
import BugFeed from "./BugFeed";

function Dashboard(props) {
    const [bugs, updateBugs] = useState(props.bugs);

    const [modalIsActive, setModalIsActive] = useState(false);
    const deleteBug = (id) => {
        const newState = bugs.filter((bug) => bug.id !== id);
        updateBugs(newState);
    };
    return (
        <section className="dashboard_wrap">
            <SideBar
                bugs={bugs}
                // changeFilter={changeFilter}
                setModalIsActive={setModalIsActive}
            />
            <div className="bugs_wrap">
                <BugFeed />
                {/* {bugs
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
                    })} */}
            </div>
            <ExpandedBug
                bugs={bugs}
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

const mapStateToProps = (state) => {
    return { bugs: state.bugs, selectedBug: state.selectedBug };
};

export default connect(mapStateToProps, {
    selectBug,
})(Dashboard);
