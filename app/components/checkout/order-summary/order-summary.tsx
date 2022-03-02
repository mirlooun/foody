import React from 'react';
import { FlatList } from 'react-native';
import { RestaurantMenuItem } from '../../../model/menu-item';
import OrderItem from '../order-item/order-item';

interface OrderSummaryProps {
    items: RestaurantMenuItem[];
}

const OrderSummary = ({ items }: OrderSummaryProps) => {
    return (
        <FlatList
            data={items}
            renderItem={({ item }) => (
                <OrderItem title={item.title} price={item.price} />
            )}
            keyExtractor={(item) => item.title}
        />
    );
};

export default OrderSummary;
