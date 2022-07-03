import axios from 'axios';

const GET_DETAIL_PRODUCT = "GET_DETAIL_PRODUCT";
const GET_PRODUCT_ALL = "GET_PRODUCT_ALL";

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
        axios ({
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
        axios ({
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

export {
    getProductDetail, GET_DETAIL_PRODUCT,
    getProduct, GET_PRODUCT_ALL
}