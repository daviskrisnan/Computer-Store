import {
    GET_CART_LIST,
    ADD_CART,
    DELETE_CART,
    EDIT_CART,
    GET_DETAIL_CART
} from '../../actions/shoppingCartAction';

const initialState = {
    getListCartResult: false,
    getListCartLoading: false,
    getListCartError: false,

    addCartResult: false,
    addCartLoading: false,
    addCartError: false,

    deleteCartResult: false,
    deleteCartLoading: false,
    deleteCartError: false,
    
    editCartResult: false,
    editCartLoading: false,
    editCartError: false,
    
    getDetailCartResult: false,
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case GET_CART_LIST:
            return {
                ...state,
                getListCartResult: action.payload.data,
                getListCartLoading: action.payload.loading,
                getListCartError: action.payload.errorMessage,
            }
        case ADD_CART:
            return {
                ...state,
                addCartResult: action.payload.data,
                addCartLoading: action.payload.loading,
                addCartError: action.payload.errorMessage,
            }
        case DELETE_CART:
            return {
                ...state,
                deleteCartResult: action.payload.data,
                deleteCartLoading: action.payload.loading,
                deleteCartError: action.payload.errorMessage,
            }
        case EDIT_CART:
            return {
                ...state,
                editCartResult: action.payload.data,
                editCartLoading: action.payload.loading,
                editCartError: action.payload.errorMessage,
            }
        case GET_DETAIL_CART:
            return {
                ...state,
                getDetailCartResult: action.payload.data,
            }
        default:
            return state;
    }
};

export default cart;