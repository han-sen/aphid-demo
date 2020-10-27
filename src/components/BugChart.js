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
        const colors = ["#2B3954", "#42516F", "#606D88"];
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Minor", "Moderate", "Breaking"],
                datasets: [
                    {
                        data: [data.minor, data.moderate, data.breaking],
                        backgroundColor: [colors[0], colors[1], colors[2]],
                        borderColor: [colors[0], colors[1], colors[2]],
                        minBarLength: 1,
                        barThickness: 10,
                    },
                ],
            },
            options: {
                animation: {
                    animateScale: true,
                },
                cornerRadius: 20,
                cutoutPercentage: 70,
                legend: {
                    display: false,
                    position: "bottom",
                    align: "center",
                    labels: {
                        fontColor: "white",
                        fontFamily: "Fira Mono",
                        boxWidth: 10,
                        padding: 20,
                        usePointStyle: true,
                        drawRoundedRectangle: true,
                        // fontSize: "0.8rem",
                    },
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
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
                Bugs in Queue:
            </h1>
            <canvas
                id="bug_chart"
                width="225"
                height="225"
                style={{ maxWidth: "225px" }}
            ></canvas>
        </div>
    );
}
