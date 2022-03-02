import { Restaurant } from "../model/restaurant-item";
import { Address } from "../screens/home/home";

export interface Response {
    sections: [
        {
            items: Restaurant[];
        }
    ];
}

export const getRestaurantsData = async (address: Address) => {
    console.log(address?.latitude, address?.longitude);

    const woltApiUri = `https://restaurant-api.wolt.com/v1/pages/restaurants?lat=${address?.latitude}&lon=${address?.longitude}`;

    return fetch(woltApiUri)
        .then((res) => res.json())
        .then((json) => {
            const restaurants = (json as Response).sections[0].items
                .slice(0, 10)
                .map(mapToRestaurant);
            return restaurants;
        })
        .catch(e => null);
};

function mapToRestaurant(item: Restaurant) {
    const resto: Restaurant = {
        image: { url: item.image.url },
        title: item.title,
        venue: {
            online: item.venue.online,
            estimate_range: item.venue.estimate_range,
            tags: item.venue.tags,
            rating: {
                rating: item.venue.rating?.rating ?? 0,
                score: item.venue.rating?.score ?? 0,
            },
        },
    };
    return resto;
}
