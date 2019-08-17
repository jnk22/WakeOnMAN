import axios from 'axios';

import {
    GET_HOSTS,
    ADD_HOST,
    DELETE_HOST,
    UPDATE_HOST,
    GET_HOST_CATEGORIES,
    ADD_HOST_CATEGORY,
    DELETE_HOST_CATEGORY,
    UPDATE_HOST_CATEGORY
} from "./types";

// HOSTS
export const getHosts = () => (dispatch) => {
    axios
        .get("/api/wakeapp/hosts/")
        .then(res => {
            dispatch({
                type: GET_HOSTS,
                payload: res.data
            });
        }).catch(err => console.log(err)
    );
};

export const addHost = () => (dispatch) => {
    axios
        .get(`/api/wakeapp/hosts/`)
        .then(res => {
            dispatch({
                type: ADD_HOST,
                payload: res.data
            });
        }).catch(err => console.log(err)
    );
};

export const deleteHost = (id) => (dispatch) => {
    axios
        .delete(`/api/wakeapp/hosts/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_HOST,
                payload: id
            });
        }).catch(err => console.log(err)
    );
};

export const updateHost = (id) => (dispatch) => {
    axios
        .put(`/api/wakeapp/hosts/${id}/`)
        .then(res => {
            dispatch({
                type: UPDATE_HOST,
                payload: id
            });
        }).catch(err => console.log(err)
    );
};

// HOST_CATEGORIES
export const getHostCategories = () => (dispatch) => {
    axios
        .get("/api/wakeapp/hostcategories/")
        .then(res => {
            dispatch({
                type: GET_HOST_CATEGORIES,
                payload: res.data
            });
        }).catch(err => console.log(err)
    );
};

export const addHostCategory = () => (dispatch) => {
    axios
        .put(`/api/wakeapp/hostcategories/`)
        .then(res => {
            dispatch({
                type: ADD_HOST_CATEGORY,
                payload: res.data
            });
        }).catch(err => console.log(err)
    );
};

export const deleteHostCategory = (id) => (dispatch) => {
    axios
        .delete(`/api/wakeapp/hostcategories/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_HOST_CATEGORY,
                payload: id
            });
        }).catch(err => console.log(err)
    );
};

export const updateHostCategory = (id) => (dispatch) => {
    axios
        .put(`/api/wakeapp/hostcategories/${id}/`)
        .then(res => {
            dispatch({
                type: UPDATE_HOST_CATEGORY,
                payload: id
            });
        }).catch(err => console.log(err)
    );
};