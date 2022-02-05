import React from "react";
import { View } from "react-native";
import { RestaurantItem } from "../../../model/RestaurantItem";
import { Props } from "../../../types/RootStackParamList";
import RestaurantItemView from "./RestaurantItemView";

const RestaurantItemListView = ({ items, navigation }: { items: RestaurantItem[], navigation: Props['navigation'] }) => (
    <View>
        {items.map((item, index) => <RestaurantItemView key={index} navigation={navigation} item={item} />)}
    </View>
);

export default RestaurantItemListView;
