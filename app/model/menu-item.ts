import { ImageSourcePropType } from "react-native";

export interface RestaurantMenuItem {
    title: string,
    description: string,
    price: string,
    image: ImageSourcePropType,
}