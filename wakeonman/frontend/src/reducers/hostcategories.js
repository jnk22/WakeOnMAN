import {GET_HOST_CATEGORIES} from '../actions/types';

const initialState = {
    hostCategories: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_HOST_CATEGORIES:
            return {...state, hostCategories: action.payload};
        default:
            return state;
    }
}
