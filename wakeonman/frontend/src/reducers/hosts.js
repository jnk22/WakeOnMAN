import {
    GET_HOSTS,
    ADD_HOST,
    DELETE_HOST,
    UPDATE_HOST
} from '../actions/types';

const initialState = {
    hosts: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_HOSTS:
            return {
                ...state,
                hosts: action.payload
            };

        case ADD_HOST:
            return {
                ...state,
                hosts: action.payload
            };

        case DELETE_HOST:
            return {
                ...state,
                hosts: state.hosts.filter(host => host.id !== action.payload)
            };

        case UPDATE_HOST:
            return {
                ...state,
                hosts: action.payload
            };

        default:
            return state;
    }
}
