const { default: Bug } = require("../components/Bug");

// action create
export const selectBug = (bug) => {
    // return an action
    return {
        type: "BUG_SELECTED",
        payload: Bug,
    };
};
