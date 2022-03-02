import { State } from "../../types/State";
import { ActionType } from "../action-types";
import { Action } from "../actions";

const initalState: State = {
  selectedItems: { items: [], restaurantName: "" },
};

const cartReducer = (state: State = initalState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART: {
      let newState = { ...state };
      newState.selectedItems = {
        items: [...newState.selectedItems.items, {...action.payload.itemContainer, isAdded: true}],
        restaurantName: action.payload.restaurantName,
      };
      return newState;
    }
    case ActionType.REMOVE_FROM_CART: {
      let newState = { ...state };
      const items = newState.selectedItems.items.filter(
        itemContainer => itemContainer.item.title !== action.payload.itemContainer.item.title
      );
      newState.selectedItems = {
        items: [...items],
        restaurantName: action.payload.restaurantName,
      };
      return newState;
    }
    default:
      return state;
  }
};

export default cartReducer;
