import { call, put, takeLatest } from "redux-saga/effects";
import { movieActions } from "../actions/movie.action";
import { movieInformationActions } from "../actions/movieInformation.action";
import { movieInformationConstant } from "../constants/movieInformation.constant";
import { movieConstant } from "../constants/movie.constant";
import getMovieData from "../services/movie.service";
import getMovieInformationData from "../services/movieInformation.service";

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

function* loadMovieInformation(action) {
    try {
        const response = yield call(getMovieInformationData, action.payload);
        if (!response) {
            yield put(movieInformationActions.loadMovieInformationApiFailAction());
        } else {
            yield put(movieInformationActions.loadMovieInformationApiSuccessAction(response.data));
        }
    } catch (error) {
        yield put(movieInformationActions.loadMovieInformationApiFailAction());
    }

}

export function* movieWatcherSaga() {
    yield takeLatest(movieConstant.LOAD_MOVIE_API, loadMovie);
    yield takeLatest(movieInformationConstant.LOAD_MOVIE_INFORMATION_API, loadMovieInformation)
}