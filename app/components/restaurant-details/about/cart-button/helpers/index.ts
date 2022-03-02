import { RestaurantMenuItemContainer } from "../../../../../types/State";

export function getCartTotal(selectedItems: RestaurantMenuItemContainer[]) {
    const amount = selectedItems
        .map((itemContainer) => getPriceAsNumber(itemContainer.item.price))
        .reduce((acc, item) => acc + item, 0);

    return new Intl.NumberFormat('et-EE', {
        style: 'currency',
        currency: 'EUR',
    }).format(amount);
}

function getPriceAsNumber(price: string) {
    return Number(price.slice(1));
}
