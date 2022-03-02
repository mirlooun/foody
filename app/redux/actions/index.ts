import { RestaurantMenuItem } from "../../model/menu-item";
import { RestaurantItem } from "../../model/restaurant-item";
import { RestaurantMenuItemContainer } from "../../types/State";
import { ActionType } from "../action-types";

export interface PayloadType {
    itemContainer: RestaurantMenuItemContainer,
    restaurantName: string
}

interface AddToCartAction {
  type: ActionType.ADD_TO_CART;
  payload: PayloadType;
}

interface RemoveFromCartAction {
    type: ActionType.REMOVE_FROM_CART,
    payload: PayloadType
}

export type Action = AddToCartAction | RemoveFromCartAction
