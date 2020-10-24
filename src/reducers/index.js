import { combineReducers } from "redux";
import seedData from "../seed";

const bugsReducer = () => {
    return seedData;
};

const selectedBugReducer = (selectedBug = null, action) => {
    if (action.type === "BUG_SELECTED") {
        return action.payload;
    }
    return selectedBug;
};

const filterReducer = (options = { status: "all", project: "" }, action) => {
    if (action.type === "FILTER_SELECTED") {
        return action.payload;
    }
    return { ...options };
};

export default combineReducers({
    bugs: bugsReducer,
    filters: filterReducer,
    selectedBug: selectedBugReducer,
});
