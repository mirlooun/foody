import { ImageSourcePropType } from "react-native";

export interface MenuItem {
    title: string,
    description: string,
    price: string,
    image: ImageSourcePropType
}