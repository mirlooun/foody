import React from "react";
import { ScrollView, View } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { Space } from "../../../../globals/components/space";
import { RestaurantMenuItem as MenuItemModel } from "../../../../model/menu-item";
import RestaurantMenuItem from "./menu-list-item/menu-list-item";
import styles from "./styles";

const MenuList = ({
  foodList,
  restaurantName,
}: {
  foodList: MenuItemModel[];
  restaurantName: string;
}) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    {foodList.map((item, index) => (
      <View key={index}>
        <RestaurantMenuItem item={item} restaurantName={restaurantName} />
        <Divider
          width={0.5}
          orientation="vertical"
          style={styles.divider}
        />
      </View>
    ))}
    <Space height={100} opacity={0} />
  </ScrollView>
);

export default MenuList;
