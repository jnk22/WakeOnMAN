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
            state.hostCategories.push(action.payload);
            state.hostCategories.sort(function (a, b) {
                return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
            });

            return {
                ...state,
                hostCategories: [...state.hostCategories]
            };

        case DELETE_HOST_CATEGORY:
            return {
                ...state,
                hostCategories: state.hostCategories.filter(hostCategory =>
                    hostCategory.id !== action.payload)
            };

        case UPDATE_HOST_CATEGORY:
            state.hostCategories = state.hostCategories.filter(hostCategory =>
                hostCategory.id !== action.payload.id);
            state.hostCategories.push(action.payload);
            state.hostCategories.sort(function (a, b) {
                return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
            });

            return {
                ...state,
                hostCategories: [...state.hostCategories]
            };

        default:
            return state;
    }
}
