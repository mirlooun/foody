import { Restaurant } from "../model/restaurant-item";

export const mockRestaurantItems: Restaurant[] = [
    {
        title: "FIG Restaurant",
        image: require('../assets/images/bg1.jpg'),
        venue: {
            online: true,
            tags: ['Fine Dining', 'Casual Dining'],
            estimate_range: "35-45",
            rating: {
                score: 4.5,
            },
        }
    },
    {
        title: "LIT Restaurant",
        image: require('../assets/images/bg2.jpg'),
        venue: {
            online: true,
            tags: ['Casual Dining', 'Contemporary Casual', 'Family Style'],
            estimate_range: "30-40",
            rating: {
                score: 4.7,
            },
        }
    },
    {
        title: "Hesburger",
        image: require('../assets/images/bg3.jpg'),
        venue: {
            online: true,
            tags: ['Fast Casual', 'Fast Food'],
            estimate_range: "15-20",
            rating: {
                score: 5,
            },
        }
    },
]