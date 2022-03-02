import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import BottomTabs from '../../components/home/bottom-tabs/bottom-tabs';
import CategoryList from '../../components/home/category-list/category-list';
import HeaderTabs from '../../components/home/header/header-tabs/header-tabs/header-tabs';
import { Header } from '../../components/home/header/header';
import RestaurantList from '../../components/home/restaurant-list/restaurants-list';
import { mockCategories } from '../../service/MockCategories';
import { Props } from '../../types/RootStackParamList';
import styles from './styles';
import SearchBar from '../../components/home/header/search-bar/search-bar';
import { useEffect } from 'react';
import { Restaurant } from '../../model/restaurant-item';
import { getRestaurantsData } from '../../service/getRestaurants';
import { mockRestaurantItems } from '../../service/MockRestaurantItems';
export interface Address {
    latitude: number;
    longitude: number;
}

const Home = (props: Props) => {
    const [address, setAddress] = useState<Address | null>(null);

    const [restaurantsData, setRestaurantsData] = useState<Restaurant[]>([]);

    useEffect(() => {
        const getRestos = async () => {
            if (address === null) {
                return;
            } else {
                const data = await getRestaurantsData(address);
                if (data !== null) {
                    setRestaurantsData(data);
                }
            }
        };
        getRestos();
    }, [address]);

    return (
        <View style={styles.container}>
            <Header>
                <SearchBar setAddress={setAddress} />
                <HeaderTabs />
            </Header>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CategoryList items={mockCategories} />
                <RestaurantList
                    items={restaurantsData}
                    navigation={props.navigation}
                />
            </ScrollView>
            <BottomTabs />
        </View>
    );
};

export default Home;
