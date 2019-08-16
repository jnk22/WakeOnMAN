import axios from 'axios';

import {GET_HOSTS} from "./types";

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
