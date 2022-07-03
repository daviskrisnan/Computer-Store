import axios from 'axios';

const GET_DETAIL_PRODUCT = "GET_DETAIL_PRODUCT";
const GET_PRODUCT_ALL = "GET_PRODUCT_ALL";

const ADD_PRODUCT = "ADD_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const EDIT_PRODUCT = "EDIT_PRODUCT";
const GET_DETAIL = "GET_DETAIL";

const getProductDetail = (data) => {
    return (dispatch) => {
        dispatch({
            type: "GET_DETAIL_PRODUCT",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "GET",
            url: `http://localhost:3000/products/detail_product/${data}`,
            timeout: 120000
        })
            .then((response) => {
                dispatch({
                    type: "GET_DETAIL_PRODUCT",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: "GET_DETAIL_PRODUCT",
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
};

const getProduct = () => {
    return (dispatch) => {
        dispatch({
            type: "GET_PRODUCT_ALL",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "GET",
            url: `http://localhost:3000/products`,
            timeout: 120000
        })
            .then((response) => {
                dispatch({
                    type: "GET_PRODUCT_ALL",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: "GET_PRODUCT_ALL",
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
};

const addProduct = (access_token, id) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_PRODUCT",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "POST",
            url: `http://localhost:3000/products/add_product/${id}`,
            timeout: 120000,
            headers: {
                access_token: access_token
            }
        })
            .then((response) => {
                dispatch({
                    type: "ADD_PRODUCT",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: "ADD_PRODUCT",
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
};

const deleteProduct = (access_token, id) => {
    return (dispatch) => {
        dispatch({
            type: "DELETE_PRODUCT",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "DELETE",
            url: `http://localhost:3000/products/delete_product/${id}`,
            timeout: 120000,
            headers: {
                access_token: access_token
            }
        })
            .then((response) => {
                dispatch({
                    type: "DELETE_PRODUCT",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: "DELETE_PRODUCT",
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
};

const editProduct = (access_token, data, id) => {
    return (dispatch) => {
        dispatch({
            type: "EDIT_PRODUCT",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "PUT",
            url: `http://localhost:3000/products/detail_product/${id}`,
            timeout: 120000,
            data: data,
            headers: {
                access_token: access_token
            }
        })
            .then((response) => {
                dispatch({
                    type: "EDIT_PRODUCT",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: "EDIT_PRODUCT",
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
};

const getDetail = (data) => {
    return (dispatch) => {
        dispatch({
            type: "GET_DETAIL",
            payload: {
                data: data,
            }
        })
    }
};

export {
    getProductDetail, GET_DETAIL_PRODUCT,
    getProduct, GET_PRODUCT_ALL,
    addProduct, ADD_PRODUCT,
    deleteProduct, DELETE_PRODUCT,
    editProduct, EDIT_PRODUCT,
    getDetail, GET_DETAIL
}