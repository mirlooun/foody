import { RestaurantMenuItem } from '../model/menu-item';
export interface State {
    selectedItems: {
        items: RestaurantMenuItemContainer[];
        restaurantName: string;
    };
};

export interface RestaurantMenuItemContainer {
    item: RestaurantMenuItem,
    isAdded: boolean | false
} 
