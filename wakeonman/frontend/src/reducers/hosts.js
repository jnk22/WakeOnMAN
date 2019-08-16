import {GET_HOSTS} from '../actions/types';

const initialState = {
    hosts: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_HOSTS:
            return {...state, hosts: action.payload};
        default:
            return state;
    }
}
