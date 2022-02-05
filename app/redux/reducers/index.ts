import { combineReducers, CombinedState } from 'redux';

import cartReducer, { Action, State } from './cartReducer';

let reducers = combineReducers({
    cartReducer: cartReducer,
})

const rootReducer = (state: CombinedState<{ cartReducer: State, action: Action}>, action: Action) => {
    return reducers(state, action)
}

export default rootReducer;