import React, { useState } from 'react';
import { Image, View, Text, ImageSourcePropType } from 'react-native';
import { RestaurantMenuItem as RestaurantMenuItemModel } from '../../../../../model/menu-item';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../../../../redux';
import styles from './styles';
import { RestaurantMenuItemContainer } from '../../../../../types/State';

interface RestaurantMenuItemProps {
    item: RestaurantMenuItemModel;
    restaurantName: string;
}

const RestaurantMenuItem = ({
    item,
    restaurantName,
}: RestaurantMenuItemProps) => {
    const dispatch = useDispatch();

    const { addToCart, removeFromCart } = bindActionCreators(
        actionCreators,
        dispatch
    );

    const selectedItems = useSelector(
        (state: State) => state.cartReducer.selectedItems.items
    );

    const selectedItem = selectedItems.find(
        (itemContainer) => itemContainer.item.title === item.title
    );

    const isAdded = selectedItem?.isAdded ?? false;

    const handleButtonClick = () => {
        const itemContainer: RestaurantMenuItemContainer = {
            item: item,
            isAdded: isAdded,
        };

        isAdded
            ? removeFromCart({ itemContainer, restaurantName })
            : addToCart({ itemContainer, restaurantName });
    };

    return (
        <View style={styles.container}>
            <BouncyCheckbox
                iconStyle={styles.checkBoxIcon}
                fillColor={'green'}
                onPress={handleButtonClick}
                isChecked={isAdded}
            />
            <FoodInfo
                title={item.title}
                description={item.description}
                price={item.price}
            />
            <FoodImage image={item.image} />
        </View>
    );
};

interface FoodInfoProps {
    title: string;
    description: string;
    price: string;
}

const FoodInfo = ({ title, description, price }: FoodInfoProps) => (
    <View style={{ width: 150, justifyContent: 'space-evenly' }}>
        <Text style={styles.foodInfoTitleText}>{title}</Text>
        <Text>{description}</Text>
        <Text>{price}</Text>
    </View>
);

const FoodImage = ({ image }: { image: ImageSourcePropType }) => (
    <Image
        source={image}
        style={{ width: 100, height: 100, borderRadius: 15 }}
    />
);

export default RestaurantMenuItem;
