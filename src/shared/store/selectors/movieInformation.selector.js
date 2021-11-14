import { createSelector } from "reselect";

export const globalMovieInformationState = (state) => state.movieInformation;

export const getMovieInformationSelector = createSelector(
    globalMovieInformationState,
    movieInformation => movieInformation.data);
export const getMovieInformationLoadedSelector = createSelector(
    globalMovieInformationState,
    movieInformation => movieInformation.loaded);