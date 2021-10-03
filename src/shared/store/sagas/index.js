import { all } from "redux-saga/effects";
// import sagas here
import { movieWatcherSaga } from "./movie.saga";

// add new sagas to the array below
export default function* mySaga() {
    yield all([movieWatcherSaga()]);
}