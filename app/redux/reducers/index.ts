import { combineReducers } from 'redux';
import cartReducer from './cart-reducer';

let reducers = combineReducers({
    cartReducer: cartReducer,
})

export default reducers;

export type State = ReturnType<typeof reducers>;