import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import AboutView from '../components/restaurantDetails/about/AboutView';
import { CartButtonView } from '../components/restaurantDetails/about/CartButtonView';
import MenuItemListView from '../components/restaurantDetails/about/MenuItemListView';
import { Colors } from '../globals/GlobalStyles';
import { mockMenuItems } from '../service/MockMenuItems';
import { Props } from '../types/RootStackParamList';

const RestaurantDetails: React.FC<Props> = (props) => {
    const item = props['route'].params!.item;

    return (
        <View style={{ flex: 1, backgroundColor: Colors.White }}>
            <AboutView {...item}></AboutView>
            <Divider width={1.5} style={{ marginVertical: 15 }}></Divider>
            <MenuItemListView foodList={mockMenuItems} />
            <CartButtonView navigation={props.navigation} restaurantName={props.route.params!.item.name} />
        </View>
    );
};

export default RestaurantDetails;
