import React, { useState } from 'react';
import { ScrollView, View, StatusBar } from 'react-native';
import BottomTabsView from '../components/home/bottomTabs/BottomTabsView';
import CategoryListView from '../components/home/categories/CategoryListView';
import HeaderTabsView from '../components/home/headerTabs/HeaderTabs';
import RestaurantItemListView from '../components/home/restaurantItem/RestaurantItemsListView';
import SearchBarView from '../components/home/searchBar/SearchBar';
import { Colors } from '../globals/GlobalStyles';
import { mockCategories } from '../service/MockCategories';
import { mockRestaurantItems } from '../service/MockRestaurantItems';
import { Props } from '../types/RootStackParamList';

const Home: React.FC<Props> = (props) => {
    const [restaurantListData, setRestaurantListData] = useState(mockRestaurantItems);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.Grey }}>
            <StatusBar barStyle={'dark-content'}></StatusBar>
            <View style={{ backgroundColor: Colors.White, padding: 15 }}>
                <HeaderTabsView />
                <SearchBarView />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CategoryListView items={mockCategories} />
                <RestaurantItemListView items={restaurantListData} navigation={props.navigation} />
            </ScrollView>
            <BottomTabsView />
        </View >
    );
}

export default Home;
