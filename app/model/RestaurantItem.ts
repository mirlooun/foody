import { ImageSourcePropType } from "react-native";

export interface RestaurantItem {
    name: string,
    timeFoodReady: string,
    rating: number,
    imageSource: ImageSourcePropType
}
