import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { selectBug } from "../actions";
import NewBug from "./NewBug";
import Modal from "./Modal";
import SideBar from "./SideBar";
import ExpandedBug from "./ExpandedBug";
import BugFeed from "./BugFeed";

function Dashboard(props) {
    const [modalIsActive, setModalIsActive] = useState(false);
    return (
        <section className="dashboard_wrap">
            <SideBar bugs={props.bugs} setModalIsActive={setModalIsActive} />
            <BugFeed />
            <ExpandedBug />
            <Modal
                modalIsActive={modalIsActive}
                setModalIsActive={setModalIsActive}
                modalTitle="Add Bug"
                submitText="Add Bug"
            >
                <NewBug bugs={props.bugs} setModalIsActive={setModalIsActive} />
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
