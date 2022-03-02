import React from 'react';
import { View, Text } from 'react-native';

interface OrderItemProps {
    title: string;
    price: string;
}

const OrderItem = ({ title, price }: OrderItemProps) => {
    return (
        <View style={
            {
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#999'
            }}>
            <Text>{title}</Text>
            <Text>{price}</Text>
        </View>
    );
};

export default OrderItem;
