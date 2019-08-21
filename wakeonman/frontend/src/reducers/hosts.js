import {
    GET_HOSTS,
    ADD_HOST,
    DELETE_HOST,
    UPDATE_HOST,
    START_HOST,
    PING_HOST
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
                hosts: [...state.hosts, action.payload]
            };

        case DELETE_HOST:
            return {
                ...state,
                hosts: state.hosts.filter(host => host.id !== action.payload)
            };

        case UPDATE_HOST:
            return {
                ...state,
                hosts: state.hosts
            };

        case START_HOST:
            return {
                ...state,
                hosts: state.hosts
            };

        case PING_HOST:
            return {
                ...state,
                hosts: state.hosts
            };

        default:
            return state;
    }
}
