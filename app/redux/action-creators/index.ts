import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action, PayloadType } from "../actions";

export const addToCart = (item: PayloadType) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_TO_CART,
      payload: item,
    });
  };
};

export const removeFromCart = (item: PayloadType) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_FROM_CART,
      payload: item,
    });
  };
};
