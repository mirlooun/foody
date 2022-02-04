import { RestaurantItem } from "../model/RestaurantItem";

export const mockRestaurantItems: RestaurantItem[] = [
    {
        name: "FIG Restaurant",
        timeFoodReady: "35-45 • min",
        rating: 4.5,
        imageSource: require('../assets/images/bg1.jpg'),
    },
    {
        name: "LIT Restaurant",
        timeFoodReady: "30-40 • min",
        rating: 4,
        imageSource: require('../assets/images/bg2.jpg'),
    },
    {
        name: "Hesburger",
        timeFoodReady: "15-20 • min",
        rating: 5,
        imageSource: require('../assets/images/bg3.jpg'),
    },
]