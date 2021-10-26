import { call, put, takeLatest } from "redux-saga/effects";
import { movieActions } from "../actions/movie.action";
import { movieConstant } from "../constants/movie.constant";
import getMovieData from "../services/movie.service";

function* loadMovie(action) {
    try {
        const response = yield call(getMovieData, action.payload);
        if (!response) {
            yield put(movieActions.loadMovieApiFailAction());
        } else {
            yield put(movieActions.loadMovieApiSuccessAction(response.data));
        }
    } catch (error) {
        yield put(movieActions.loadMovieApiFailAction());
    }
}

export function* movieWatcherSaga() {
    yield takeLatest(movieConstant.LOAD_MOVIE_API, loadMovie);
}