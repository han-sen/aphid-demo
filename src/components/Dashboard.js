import React, { useState } from "react";
import seedData from "../seed.js";
import Bug from "./Bug";
import FilterForm from "./FilterForm";
import NewBug from "./NewBug";

export default function Dashboard() {
    const [bugs, updateBugs] = useState(seedData);
    const [statusFilter, setStatusFilter] = useState("open");
    const changeFilter = (e) => {
        setStatusFilter(e.target.value);
    };
    return (
        <section className="dashboard_wrap">
            <FilterForm changeFilter={changeFilter} />
            <NewBug bugs={bugs} updateBugs={updateBugs} />
            {bugs
                .filter((bug) => bug.status === statusFilter)
                .map((bug, i) => {
                    return (
                        <Bug
                            bug={bug}
                            changeFilter={changeFilter}
                            updateBugs={updateBugs}
                            key={bug.title + i}
                        />
                    );
                })}
        </section>
    );
}
