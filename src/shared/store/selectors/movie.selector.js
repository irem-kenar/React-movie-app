import { createSelector } from "reselect";

export const globalMovieState = (state) => state.movie;

export const getMovieDataSelector = createSelector(
    globalMovieState,
    movie => movie.data);
export const getMovieLoadedSelector = createSelector(
    globalMovieState,
    movie => movie.loaded);