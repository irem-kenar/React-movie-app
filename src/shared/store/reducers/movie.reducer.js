import { movieConstant } from "../constants/movie.constant";

const INITIAL_STATE = {
    data: {},
    loading: false,
    loaded: false,
    loadFail: false
}

const movieReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case movieConstant.LOAD_MOVIE_API:
            return {
                ...state,
                loading: true,
                loaded: false,
                loadFail: false,
            };
        case movieConstant.LOAD_MOVIE_API_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                loadFail: false,
            };
        case movieConstant.LOAD_MOVIE_API_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                loadFail: true,
                data: action.payload,
            }
        default:
            return {
                ...state,
            }
    }
}

export default movieReducer;