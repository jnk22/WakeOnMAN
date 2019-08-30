import axios from 'axios';

import {
    GET_HOSTS,
    ADD_HOST,
    DELETE_HOST,
    UPDATE_HOST,
    START_HOST,
    PING_HOST,
    GET_HOST_CATEGORIES,
    ADD_HOST_CATEGORY,
    DELETE_HOST_CATEGORY,
    UPDATE_HOST_CATEGORY
} from './types';

// GET_HOSTS
export const getHosts = () => dispatch => {
    axios
        .get('/api/hosts/')
        .then(res => {
            dispatch({
                type: GET_HOSTS,
                payload: res.data
            });
        }).catch(err => console.log(err.response.data)
    );
};

// ADD_HOST
export const addHost = (host) => dispatch => {
    axios
        .post('/api/hosts/', host)
        .then(res => {
            dispatch({
                type: ADD_HOST,
                payload: res.data
            });
        }).catch(err => console.log(err.response.data)
    );
};

// DELETE_HOST
export const deleteHost = (id) => dispatch => {
    axios
        .delete(`/api/hosts/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_HOST,
                payload: id
            });
        }).catch(err => console.log(err.response.data)
    );
};

// UPDATE_HOST
export const updateHost = (id, host) => dispatch => {
    axios
        .patch(`/api/hosts/${id}/`, host)
        .then(res => {
            dispatch({
                type: UPDATE_HOST,
                payload: res.data
            });
        }).catch(err => console.log(err.response.data)
    );
};

// START_HOST
export const startHost = (id) => dispatch => {
    axios
        .patch(`/api/hosts/${id}/start/`)
        .then(res => {
            dispatch({
                type: START_HOST,
                payload: id
            });
        }).catch(err => console.log(err.response.data)
    );
};

// PING_HOST
export const pingHost = (id) => dispatch => {
    axios
        .patch(`/api/hosts/${id}/ping/`)
        .then(res => {
            dispatch({
                type: PING_HOST,
                payload: id
            });
        }).catch(err => console.log(err.response.data)
    );
};

// GET_HOST_CATEGORIES
export const getHostCategories = () => dispatch => {
    axios
        .get('/api/hostcategories/')
        .then(res => {
            dispatch({
                type: GET_HOST_CATEGORIES,
                payload: res.data
            });
        }).catch(err => console.log(err.response.data)
    );
};

// ADD_HOST_CATEGORY
export const addHostCategory = (category) => dispatch => {
    axios
        .post('/api/hostcategories/', category)
        .then(res => {
            dispatch({
                type: ADD_HOST_CATEGORY,
                payload: res.data
            });
        }).catch(err => console.log(err.response.data)
    );
};

// DELETE_HOST_CATEGORY
export const deleteHostCategory = (id) => dispatch => {
    axios
        .delete(`/api/hostcategories/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_HOST_CATEGORY,
                payload: id
            });
        }).catch(err => console.log(err.response.data)
    );
};

// UPDATE_HOST_CATEGORY
export const updateHostCategory = (id) => dispatch => {
    axios
        .post(`/api/hostcategories/${id}/`)
        .then(res => {
            dispatch({
                type: UPDATE_HOST_CATEGORY,
                payload: id
            });
        }).catch(err => console.log(err.response.data)
    );
};
