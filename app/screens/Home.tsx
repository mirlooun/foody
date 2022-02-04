import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import CategoriesList from '../components/categories/CategoryListView';
import HeaderTabs from '../components/headerTabs/HeaderTabs';
import { RestaurantItemList } from '../components/restaurantItem/RestaurantItemView';
import { SearchBar } from '../components/searchBar/SearchBar';
import { mockRestaurantItems } from '../service/MockRestaurantItems';

const YELP_API_KEY = ''

export default function Home() {
    const [restaurantListData, setRestaurantListData] = useState(mockRestaurantItems);

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CategoriesList />
                <RestaurantItemList items={restaurantListData} />
            </ScrollView>
        </SafeAreaView >
    );
}
