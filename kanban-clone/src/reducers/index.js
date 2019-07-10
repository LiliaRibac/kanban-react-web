import{combineReducers} from "redux";
import listsReducer from "./list";

export default combineReducers({
    lists:listsReducer
});