import { RestaurantMenuItem } from '../model/menu-item';

export const mockMenuItems: RestaurantMenuItem[] = [
    {
        title: 'Lasagna',
        description: 'Best lasagna in the world!',
        price: '€13.50',
        image: require('../assets/images/lasagna.jpg'),
    },
    {
        title: 'Soup',
        description: 'Best soup in the world',
        price: '€6.70',
        image: require('../assets/images/soup.jpg'),
    },
    {
        title: 'Pizza',
        description: 'Best lasagna',
        price: '€10.300',
        image: require('../assets/images/pizza.jpg'),
    },
    {
        title: 'Burger',
        description: 'Best lasagna',
        price: '€9.60',
        image: require('../assets/images/burger.jpeg'),
    },
    {
        title: 'Pasta',
        description: 'Best lasagna',
        price: '€8.90',
        image: require('../assets/images/pasta.jpg'),
    },
];
