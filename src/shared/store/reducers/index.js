// import reducers below
import movieReducer from "./movie.reducer";
import movieInformationReducer from "./movieInformation.reducer";
import { combineReducers } from "redux";

// add reducers below
const rootReducer = combineReducers({
    movie: movieReducer,
    movieInformation: movieInformationReducer,
});

export default rootReducer;