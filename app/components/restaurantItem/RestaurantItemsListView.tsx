import React from "react";
import { RestaurantItem } from "../../model/RestaurantItem";
import RestaurantItemView from "./RestaurantItemView";

const RestaurantItemListView = (props: { items: RestaurantItem[] }) => {
    return <>
        {props.items.map((item, index) => <RestaurantItemView key={index} item={item} />)}
    </>
};

export default RestaurantItemListView;
