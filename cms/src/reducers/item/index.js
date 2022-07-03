import {
    GET_ITEM_LIST,
    ADD_ITEM,
    DELETE_ITEM,
    EDIT_ITEM,
    GET_DETAIL_ITEM
} from '../../actions/itemAction';

const initialState = {
    getItemResult: false,
    getItemLoading: false,
    getItemError: false,

    addItemResult: false,
    addItemLoading: false,
    addItemError: false,

    deleteItemResult: false,
    deleteItemLoading: false,
    deleteItemError: false,

    editItemResult: false,
    editItemLoading: false,
    editItemError: false,

    getDetailItemResult: false,
};

const item = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEM_LIST:
            return {
                ...state,
                getItemResult: action.payload.data,
                getItemLoading: action.payload.loading,
                getItemError: action.payload.errorMessage,
            }
        case ADD_ITEM:
            return {
                ...state,
                addItemResult: action.payload.data,
                addItemLoading: action.payload.loading,
                addItemError: action.payload.errorMessage,
            }
        case DELETE_ITEM:
            return {
                ...state,
                deleteItemResult: action.payload.data,
                deleteItemLoading: action.payload.loading,
                deleteItemError: action.payload.errorMessage,
            }
        case EDIT_ITEM:
            return {
                ...state,
                editItemResult: action.payload.data,
                editItemLoading: action.payload.loading,
                editItemError: action.payload.errorMessage,
            }
        case GET_DETAIL_ITEM:
            return {
                ...state,
                getDetailItemResult: action.payload.data
            }
        default:
            return state
    }
};

export default item;