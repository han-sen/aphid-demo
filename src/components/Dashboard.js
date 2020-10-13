import React, { useState, useEffect } from "react";
import seedData from "../seed.js";
import Bug from "./Bug";
import FilterForm from "./FilterForm";

export default function Dashboard() {
    const [bugs, updateBugs] = useState(seedData);
    const [filterState, setFilterState] = useState("open");
    const changeFilter = (e) => {
        setFilterState(e.target.value);
    };
    return (
        <section className="dashboard_wrap">
            <FilterForm changeFilter={changeFilter} />
            {bugs
                .filter((bug) => bug.status === filterState)
                .map((bug) => {
                    return <Bug bug={bug} changeFilter={changeFilter} />;
                })}
        </section>
    );
}
