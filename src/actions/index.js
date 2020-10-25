// action create
export const selectBug = (bug) => {
    // return an action
    console.log(bug);
    return {
        type: "BUG_SELECTED",
        payload: bug,
    };
};

export const addBug = (bug) => {
    console.log(bug);
    return {
        type: "ADD_BUG",
        payload: bug,
    };
};

export const editBug = (bug) => {
    console.log(bug);
    return {
        type: "EDIT_BUG",
        payload: bug,
    };
};

export const deleteBug = (bug) => {
    console.log(bug);
    return {
        type: "DELETE_BUG",
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
