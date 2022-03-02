import React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import AboutRestaurant from '../../components/restaurant-details/about/about';
import CartButton from '../../components/restaurant-details/about/cart-button/cart-button';
import MenuList from '../../components/restaurant-details/about/menu-list/menu-list';
import { mockMenuItems } from '../../service/MockMenuItems';
import { Props } from '../../types/RootStackParamList';
import styles from './styles';

const RestaurantDetails = (props: Props) => {
    const item = props['route'].params!.item;
    
    return (
        <View style={styles.container}>
            <AboutRestaurant item={item} />
            <Divider width={1.5} style={styles.divider}></Divider>
            <MenuList foodList={mockMenuItems} restaurantName={item.title} />
            <CartButton
                navigation={props.navigation}
                restaurantName={props.route.params!.item.title}
            />
        </View>
    );
};

export default RestaurantDetails;
