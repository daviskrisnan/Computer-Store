import axios from 'axios';

const REGISTER_USER = "REGISTER_USER";
const GET_USER = "GET_USER";
const GET_DETAIL = "GET_DETAIL";


const addUser = (data) => {
    return (dispatch) => {
        dispatch({
            type: "REGISTER_USER",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "POST",
            url: 'http://localhost:3000/users/register',
            data: data
        })
            .then((response) => {
                dispatch({
                    type: "REGISTER_USER",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: "REGISTER_USER",
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
};

const getUser = (access_token) => {
    return (dispatch) => {
        dispatch({
            type: "GET_USER",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "GET",
            url: 'http://localhost:3000/users/detail',
            timeout: 120000,
            headers: {
                access_token: access_token
            }
        })
            .then((response) => {
                dispatch({
                    type: "GET_DETAIL",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: "GET_DETAIL",
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
};

export {
    addUser, REGISTER_USER,
    getUser, GET_USER, GET_DETAIL
}