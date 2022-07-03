import axios from "axios";

const GET_ITEM_LIST = "GET_ITEM_LIST";
const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const EDIT_ITEM = "EDIT_ITEM";
const GET_DETAIL_ITEM = "GET_DETAIL_ITEM";

const getItem = (access_token) => {
    return (dispatch) => {
        dispatch({
            type: "GET_ITEM_LIST",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "GET",
            url: `http://localhost:3000/items/`,
            timeout: 120000,
            headers: {
                access_token: access_token
            }
        })
            .then((response) => {
                dispatch({
                    type: "GET_ITEM_LIST",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: "GET_ITEM_LIST",
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
};

const addItem = (access_token, data) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_ITEM",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "POST",
            url: `http://localhost:3000/items/add`,
            timeout: 120000,
            data: data,
            headers: {
                access_token: access_token
            }
        })
            .then((response) => {
                dispatch({
                    type: "ADD_ITEM",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: "ADD_ITEM",
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
};

const deleteItem = (access_token, id) => {
    return (dispatch) => {
        dispatch({
            type: "DELETE_ITEM",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "DELETE",
            url: `http://localhost:3000/items/${id}`,
            timeout: 120000,
            headers: {
                access_token: access_token
            }
        })
            .then((response) => {
                dispatch({
                    type: "DELETE_ITEM",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: "DELETE_ITEM",
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
};

const editItem = (access_token, data, id) => {
    return (dispatch) => {
        dispatch({
            type: "EDIT_ITEM",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "PUT",
            url: `http://localhost:3000/items/${id}`,
            timeout: 120000,
            data: data,
            headers: {
                access_token: access_token
            }
        })
            .then((response) => {
                dispatch({
                    type: "EDIT_ITEM",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: "EDIT_ITEM",
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
};

const detailItem = (data) => {
    return(dispatch) => {
        dispatch({
            type: "GET_DETAIL_ITEM",
            payload: {
                data: data
            }
        })
    }
}

export {
    getItem, GET_ITEM_LIST,
    addItem, ADD_ITEM,
    deleteItem, DELETE_ITEM,
    editItem, EDIT_ITEM,
    detailItem, GET_DETAIL_ITEM
}