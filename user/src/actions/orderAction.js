import axios from 'axios';

const POST_ORDER_LINE_SHOP = "POST_ORDER_LINE_SHOP";
const GET_ORDER_USER = "GET_ORDER_USER";
const POST_UPDATE_USER = "POST_UPDATE_USER";
const DELETE_ORDER = "DELETE_ORDER";
const DETAIL_ORDER = "DETAIL_ORDER";
const TRANSACTION = "TRANSACTION";

const addOrder = (access_token, id) => {
    return (dispatch) => {
        dispatch({
            type: "POST_ORDER_LINE_SHOP",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "POST",
            url: `http://localhost:3000/orders/create_order/${id}`,
            timeout: 120000,
            headers: {
                access_token: access_token
            }
        })
            .then((response) => {
                dispatch({
                    type: "POST_ORDER_LINE_SHOP",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: "POST_ORDER_LINE_SHOP",
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }    
}

const getOrderUser = (access_token) => {
    return (dispatch) => {
        dispatch({
            type: "GET_ORDER_USER",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "GET",
            url: `http://localhost:3000/orders/order_list`,
            timeout: 120000,
            headers: {
                access_token: access_token
            }
        })
            .then((response) => {
                dispatch({
                    type: "GET_ORDER_USER",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: "GET_ORDER_USER",
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }    
}

const updateOrderUser = (access_token, data, id) => {
    return (dispatch) => {
        dispatch({
            type: "POST_UPDATE_USER",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "PUT",
            url: `http://localhost:3000/orders/edit_order/${id}`,
            timeout: 120000,
            headers: {
                access_token: access_token
            },
            data: data
        })
            .then((response) => {
                dispatch({
                    type: "POST_UPDATE_USER",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: "POST_UPDATE_USER",
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }    
}

const deleteOrder = (access_token, id) => {
    return (dispatch) => {
        dispatch({
            type: "DELETE_ORDER",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "DELETE",
            url: `http://localhost:3000/orders/remove_order/${id}`,
            timeout: 120000,
            headers: {
                access_token: access_token
            }
        })
            .then((response) => {
                dispatch({
                    type: "DELETE_ORDER",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: "DELETE_ORDER",
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }    
}

const detailOrder = (data) => {
    return(dispatch) => {
        dispatch({
            type: "DETAIL_ORDER",
            payload: {
                data: data
            }
        })
    }
};

const getTransaction = (data, id) => {
    return (dispatch) => {
        dispatch({
            type: "TRANSACTION",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "GET",
            url: `http://localhost:3000/orders/transaction/${id}`,
            timeout: 120000,
        })
            .then((response) => {
                dispatch({
                    type: "TRANSACTION",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: "TRANSACTION",
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
    addOrder, POST_ORDER_LINE_SHOP,
    getOrderUser, GET_ORDER_USER,
    updateOrderUser, POST_UPDATE_USER,
    deleteOrder, DELETE_ORDER,
    detailOrder, DETAIL_ORDER,
    getTransaction, TRANSACTION
}