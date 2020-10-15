import React, { useState } from "react";

export default function NewBug(props) {
    const [input, setInput] = useState({
        title: "",
        project: "",
        severity: "warning",
        blameFile: "",
        summary: "",
        readOut: "",
        status: "open",
    });
    const handleChange = (event) => {
        setInput({ ...input, [event.target.id]: event.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateBugs([input, ...props.bugs]);
    };
    return (
        <div className="new_bug_wrap">
            <form onSubmit={handleSubmit}>
                <h1> Add a New Bug </h1>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={input.title}
                    onChange={handleChange}
                />
                <label htmlFor="project">Project:</label>
                <input
                    type="text"
                    name="project"
                    id="project"
                    value={input.project}
                    onChange={handleChange}
                />
                <label htmlFor="severity">Severity:</label>
                <select
                    name="severity"
                    id="severity"
                    onChange={handleChange}
                    value={input.severity}
                >
                    <option value="warning">Warning</option>
                    <option value="minor">Minor</option>
                    <option value="breaking">Breaking</option>
                </select>
                <label htmlFor="blameFile">Blame File:</label>
                <input
                    type="text"
                    name="blameFile"
                    id="blameFile"
                    value={input.blameFile}
                    onChange={handleChange}
                />
                <label htmlFor="summary">Summary:</label>
                <textarea
                    type="text"
                    name="summary"
                    id="summary"
                    value={input.summary}
                    onChange={handleChange}
                />
                <label htmlFor="readOut">Error Readout:</label>
                <input
                    type="text"
                    name="readOut"
                    id="readOut"
                    value={input.readOut}
                    onChange={handleChange}
                />
                <label htmlFor="severity">Bug Status:</label>
                <select
                    name="status"
                    id="status"
                    onChange={handleChange}
                    value={input.status}
                >
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                </select>
                <button type="submit">Add Bug</button>
            </form>
        </div>
    );
}
