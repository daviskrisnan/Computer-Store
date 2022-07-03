import {
    GET_DETAIL_PRODUCT,
    GET_PRODUCT_ALL,
    ADD_PRODUCT,
    DELETE_PRODUCT,
    EDIT_PRODUCT,
    GET_DETAIL,
} from "../../actions/productAction";

const initialState = {
    getdetailProductResult: false,
    getdetailProductLoading: false,
    getdetailProductError: false,

    getProductResult: false,
    getProductLoading: false,
    getProductError: false,

    addProductResult: false,
    addProductLoading: false,
    addProductError: false,

    deleteProductResult: false,
    deleteProductLoading: false,
    deleteProductError: false,
    
    editProductResult: false,
    editProductLoading: false,
    editProductError: false,

    detailProductResult: false,
};

const products = (state = initialState, action) => {
    switch (action.type) {
        case GET_DETAIL_PRODUCT:
            return {
                ...state,
                getDetailProductResult: action.payload.data,
                getDetailProductLoading: action.payload.loading,
                getDetailProductError: action.payload.errorMessage,
            };
        case GET_PRODUCT_ALL:
            return {
                ...state,
                getProductResult: action.payload.data,
                getProductLoading: action.payload.loading,
                getProductError: action.payload.errorMessage,
            };
        case ADD_PRODUCT:
            return {
                ...state,
                addProductResult: action.payload.data,
                addProductLoading: action.payload.loading,
                addProductError: action.payload.errorMessage,
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                deleteProductResult: action.payload.data,
                deleteProductLoading: action.payload.loading,
                deleteProductError: action.payload.errorMessage,
            }
        case EDIT_PRODUCT:
            return {
                ...state,
                editProductResult: action.payload.data,
                editProductLoading: action.payload.loading,
                editProductError: action.payload.errorMessage,
            }
        case GET_DETAIL:
            return {
                ...state,
                detailProductResult: action.payload.data,
            }
        default:
            return state;
    }
};

export default products;