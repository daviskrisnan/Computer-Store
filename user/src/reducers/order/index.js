import {
    POST_ORDER_LINE_SHOP,
    GET_ORDER_USER,
    POST_UPDATE_USER,
    DELETE_ORDER,
    DETAIL_ORDER,
    TRANSACTION,
} from '../../actions/orderAction';

const initialState = {
    postOrderResult: false,
    postOrderLoading: false,
    postOrderError: false,
  
    getOrderUserResult: false,
    getOrderUserLoading: false,
    getOrderUserError: false,
  
    updateOrderUserResult: false,
    updateOrderUserLoading: false,
    updateOrderUserError: false,
  
    deleteOrderUserResult: false,
    deleteOrderUserLoading: false,
    deleteOrderUserError: false,
  
    getDetailOrderUserResult: false,
  
    getTransactionResult: false,
    getTransactionLoading: false,
    getTransactionError: false,
  };
  
  const orders = (state = initialState, action) => {
    switch (action.type) {
      case POST_ORDER_LINE_SHOP:
        return {
          ...state,
          postOrderResult: action.payload.data,
          postOrderLoading: action.payload.loading,
          postOrderError: action.payload.errorMessage,
        };
      case GET_ORDER_USER:
        return {
          ...state,
          getOrderUserResult: action.payload.data,
          getOrderUserLoading: action.payload.loading,
          getOrderUserError: action.payload.errorMessage,
        };
      case POST_UPDATE_USER:
        return {
          ...state,
          updateOrderUserResult: action.payload.data,
          updateOrderUserLoading: action.payload.loading,
          updateOrderUserError: action.payload.errorMessage,
        };
      case DELETE_ORDER:
        return {
          ...state,
          deleteOrderUserResult: action.payload.data,
          deleteOrderUserLoading: action.payload.loading,
          deleteOrderUserError: action.payload.errorMessage,
        };
      case DETAIL_ORDER:
        return {
          ...state,
          getDetailOrderUserResult: action.payload.data,
        };
      case TRANSACTION:
        return {
          ...state,
          getTransactionResult: action.payload.data,
          getTransactionLoading: action.payload.loading,
          getTransactionError: action.payload.errorMessage,
        };
      default:
        return state;
    }
  };
  
  export default orders;