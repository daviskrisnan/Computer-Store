import productReducer from './product';
import userReducer from './user';
import orderReducer from './order';
import itemReducer from './item';
import shopReducer from './shoppingCart';
import { combineReducers } from 'redux';

export default combineReducers({
    productReducer, userReducer, orderReducer, itemReducer, shopReducer
})