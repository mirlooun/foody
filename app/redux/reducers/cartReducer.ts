import { RestaurantItem } from "../../model/RestaurantItem";

let defaultState = {
    selectedItems: { items: [], restaurantName: '' }
}

export type State = {
    selectedItems: {
        items: RestaurantItem[],
        restaurantName: string
    },
}

export type Action =
    | { type: 'ADD_TO_CART'; payload: RestaurantItem }
    | { type: 'REMOVE_FROM_CART'; payload: RestaurantItem };

let cartReducer = (state: State = defaultState, action: Action) => {
    switch (action.type) {
        case ('ADD_TO_CART'): {
            let newState = { ...state }
            newState.selectedItems = {
                items: [...newState.selectedItems.items, action.payload],
                restaurantName: action.payload.name
            }
            return newState;
        }
        case ('REMOVE_FROM_CART') {
            let newState = { ...state }
            const items = newState.selectedItems
            newState.selectedItems = {
                items: [...newState.selectedItems.items, action.payload],
                restaurantName: action.payload.name
            }
        }
    }
}

export default cartReducer;