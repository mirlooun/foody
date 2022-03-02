import React from 'react';
import { View } from 'react-native';
import { Restaurant } from '../../../model/restaurant-item';

import { Props } from '../../../types/RootStackParamList';
import RestaurantItem from './restaurant-list-item/restaurant-item';

interface RestaurantListProps {
    items: Restaurant[];
    navigation: Props['navigation'];
}

const RestaurantList = ({ items, navigation }: RestaurantListProps) => (
    <View>
        {items.map((item, index) => (
            <RestaurantItem
                key={index}
                navigation={navigation}
                item={item}
            />
        ))}
    </View>
);

export default RestaurantList;
