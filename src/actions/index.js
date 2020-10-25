// action create
export const selectBug = (bug) => {
    // return an action
    console.log(bug);
    return {
        type: "BUG_SELECTED",
        payload: bug,
    };
};

export const selectFilter = (filter) => {
    // return an action
    console.log(filter);
    return {
        type: "FILTER_SELECTED",
        payload: filter,
    };
};
