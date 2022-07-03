import axios from "axios";;

const GET_CART_LIST = "GET_CART_LIST";
const ADD_CART = "ADD_CART";
const DELETE_CART = "DELETE_CART";
const EDIT_CART = "EDIT_CART";
const GET_DETAIL_CART = "GET_DETAIL_CART";

const getCart = () => {
    return (dispatch) => {
        dispatch({
            type: "GET_CART_LIST",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "GET",
            url: `http://localhost:3000/carts`,
            timeout: 120000
        })
            .then((response) => {
                dispatch({
                    type: "GET_CART_LIST",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: "GET_CART_LIST",
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
};

const addCart = (access_token) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_CART",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "POST",
            url: `http://localhost:3000/carts/add`,
            timeout: 120000,
            headers: {
                access_token: access_token
            }
        })
            .then((response) => {
                dispatch({
                    type: "ADD_CART",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: "ADD_CART",
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
};

const deleteCart = (access_token, id) => {
    return (dispatch) => {
        dispatch({
            type: "DELETE_CART",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "DELETE",
            url: `http://localhost:3000/carts/${id}`,
            timeout: 120000,
            headers: {
                access_token: access_token
            }
        })
            .then((response) => {
                dispatch({
                    type: "DELETE_CART",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: "DELETE_CART",
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
};

const editCart = (access_token, data, id) => {
    return (dispatch) => {
        dispatch({
            type: "EDIT_CART",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "PUT",
            url: `http://localhost:3000/carts/${id}`,
            timeout: 120000,
            data: data,
            headers: {
                access_token: access_token
            }
        })
            .then((response) => {
                dispatch({
                    type: "EDIT_CART",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: "EDIT_CART",
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
};

const detailCart = (data) => {
    return(dispatch) => {
        dispatch({
            type: "GET_DETAIL_CART",
            payload: {
                data: data
            }
        })
    }
};

export {
    getCart, GET_CART_LIST,
    addCart, ADD_CART,
    deleteCart, DELETE_CART,
    editCart, EDIT_CART,
    detailCart, GET_DETAIL_CART
}