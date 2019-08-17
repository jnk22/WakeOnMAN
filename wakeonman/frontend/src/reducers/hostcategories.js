import {
    GET_HOST_CATEGORIES,
    ADD_HOST_CATEGORY,
    DELETE_HOST_CATEGORY,
    UPDATE_HOST_CATEGORY
} from '../actions/types';

const initialState = {
    hostCategories: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_HOST_CATEGORIES:
            return {
                ...state,
                hostCategories: action.payload
            };
        case ADD_HOST_CATEGORY:
            return {
                ...state,
                hostCategories: action.payload
            };
        case DELETE_HOST_CATEGORY:
            return {
                ...state,
                hostCategories: state.hostCategories.filter(hostCategory =>
                    hostCategory.id !== action.payload)
            };
        case UPDATE_HOST_CATEGORY:
            return {
                ...state,
                hostCategories: action.payload
            };
        default:
            return state;
    }
}
