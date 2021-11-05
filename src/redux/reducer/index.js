import { combineReducers } from "redux";
import { getReducer,selectBookReducer } from "./getReducer";
import { initialForms } from "./forms";
import { createForms } from "react-redux-form";

const rootReducer = combineReducers({
    getReducer,
    book:selectBookReducer,
    ...createForms({
        books: initialForms})
})

export default rootReducer