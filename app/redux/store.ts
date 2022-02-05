import { createStore } from 'redux';
import { State } from './reducers/cartReducer';

import reducer from './reducers/index';

export default function configureStore(initalState: State) {
    return createStore(reducer, initalState)
}