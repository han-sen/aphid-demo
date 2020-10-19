import React, { useEffect } from "react";
import Chart from "chart.js";

export default function BugChart(props) {
    let data = {};
    props.bugs
        .filter((bug) => bug.status === "open")
        .forEach((bug) => {
            if (data[bug.severity]) {
                data[bug.severity]++;
            } else {
                data[bug.severity] = 1;
            }
        });
    useEffect(() => {
        const ctx = document.getElementById("bug_chart");
        const colors = ["#b8eddf", "#7bdfc8", "#00d1b2"];
        new Chart(ctx, {
            type: "pie",
            data: {
                labels: ["Minor", "Warning", "Breaking"],
                datasets: [
                    {
                        data: [data.warning, data.minor, data.breaking],
                        backgroundColor: [colors[0], colors[1], colors[2]],
                        borderColor: [colors[0], colors[1], colors[2]],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                legend: {
                    display: true,
                    position: "bottom",
                    align: "start",
                    labels: {
                        fontColor: "white",
                        fontFamily: "Fira Mono",
                        // fontSize: "0.8rem",
                    },
                },
            },
        });
    }, [props.bugs]);
    return (
        <div className="chart_wrap">
            <h1>
                <span className="bug_total">
                    {props.bugs.filter((bug) => bug.status === "open").length}
                </span>{" "}
                Bugs To Squash:
            </h1>
            <canvas
                id="bug_chart"
                width="200"
                height="200"
                style={{ maxWidth: "200px" }}
            ></canvas>
        </div>
    );
}
