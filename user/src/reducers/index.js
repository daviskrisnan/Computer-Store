import productReducer from './product';
import userReducer from './user';
import orderReducer from './order';
import { combineReducers } from 'redux';

export default combineReducers({
    productReducer, userReducer, orderReducer
})