import { movieInformationConstant } from "../constants/movieInformation.constant";

const INITIAL_STATE = {
    data: {},
    loading: false,
    loaded: false,
    loadFail: false
}

const movieInformationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case movieInformationConstant.LOAD_MOVIE_INFORMATION_API:
            return {
                ...state,
                loading: true,
                loaded: false,
                loadFail: false,
            };
        case movieInformationConstant.LOAD_MOVIE_INFORMATION_API_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                loadFail: false,
                data: action.payload,
            };
        case movieInformationConstant.LOAD_MOVIE_INFORMATION_API_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                loadFail: true,
            }
        default:
            return {
                ...state,
            }
    }
}

export default movieInformationReducer;