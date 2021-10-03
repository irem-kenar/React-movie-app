// import reducers below
import movieReducer from "./movie.reducer";
import { combineReducers } from "redux";

// add reducers below
const rootReducer = combineReducers({
    movies: movieReducer,
});

export default rootReducer;