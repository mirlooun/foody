import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackParamList';
import { NavigationContainer } from '@react-navigation/native';
import RestaurantDetails from '../screens/restaurant-details/restaurant-details';
import Home from '../screens/home/home';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
    const screenOptions = {
        headerShown: false,
    };

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={screenOptions}
                initialRouteName={'Home'}
            >
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen
                    name="About"
                    component={RestaurantDetails}
                ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;
