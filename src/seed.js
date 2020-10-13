const seedData = [
    {
        title: "broken list",
        project: "dogify",
        severity: "breaking",
        blameFile: "unknown",
        summary: "can't render list of dogs",
        readOut: "Unexpected token '<' at start of file",
        status: "working",
    },
    {
        title: "can't save form data",
        project: "papaya",
        severity: "breaking",
        blameFile: "signUpForm.js",
        summary: "form data is not coming in as expected",
        readOut: "reference error: taget is not defined",
        status: "open",
    },
    {
        title: "wrong image order in slider",
        project: "juniper",
        severity: "minor",
        blameFile: "slider.js",
        summary: "slider starts from 2nd item in image array",
        readOut: "",
        status: "working",
    },
    {
        title: "can't access auth route",
        project: "momostly",
        severity: "breaking",
        blameFile: "app.js",
        summary: "unable to access gated route even with a valid json token",
        readOut: "403 - Unauthorized Access",
        status: "open",
    },
    {
        title: "nested promises need cleanup",
        project: "shipit",
        severity: "warning",
        blameFile: "shipmentController.js",
        summary: "ESLint is complaining about nested promises",
        readOut: "Warning: Avoid Nesting Promises",
        status: "working",
    },
];

export default seedData;
