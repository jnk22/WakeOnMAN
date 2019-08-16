import axios from 'axios';

import {GET_HOSTS, GET_HOST_CATEGORIES} from "./types";

// GET_HOSTS
export const getHosts = () => (dispatch) => {
    axios.get("/api/wakeapp/hosts/")
        .then(res => {
            dispatch({
                type: GET_HOSTS,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// GET_HOST_CATEGORIES
export const getHostCategories = () => (dispatch) => {
    axios.get("/api/wakeapp/hostcategories/")
        .then(res => {
            dispatch({
                type: GET_HOST_CATEGORIES,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status))
    );
};
