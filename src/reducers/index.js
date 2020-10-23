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

export default combineReducers({
    bugs: bugsReducer,
    selectedBug: selectedBugReducer,
});
