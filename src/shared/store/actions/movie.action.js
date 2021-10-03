import { movieConstant } from "../constants/movie.constant";

const loadMovieApiAction = (payload) => ({
    type: movieConstant.LOAD_MOVIE_API,
    payload,
});

const loadMovieApiSuccessAction = (payload) => ({
    type: movieConstant.LOAD_MOVIE_API_SUCCESS,
    payload,
});

const loadMovieApiFailAction = () => ({
    type: movieConstant.LOAD_MOVIE_API_FAIL,
});

export const movieActions = {
    loadMovieApiAction,
    loadMovieApiSuccessAction,
    loadMovieApiFailAction,
};