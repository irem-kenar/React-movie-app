import { movieInformationConstant } from "../constants/movieInformation.constant";

const loadMovieInformationApiAction = (payload) => ({
    type: movieInformationConstant.LOAD_MOVIE_INFORMATION_API,
    payload,
});

const loadMovieInformationApiSuccessAction = (payload) => ({
    type: movieInformationConstant.LOAD_MOVIE_INFORMATION_API_SUCCESS,
    payload,
});

const loadMovieInformationApiFailAction = () => ({
    type: movieInformationConstant.LOAD_MOVIE_INFORMATION_API_FAIL,
});

export const movieInformationActions = {
    loadMovieInformationApiAction,
    loadMovieInformationApiSuccessAction,
    loadMovieInformationApiFailAction,
};