import { combineReducers } from 'redux';
import filtersReducer from "./filters"
import resumesReducer from "./resumes"

const rootReducer = combineReducers({
    filters: filtersReducer,
    resumes: resumesReducer
})

export default rootReducer;