import React, { ReactElement } from 'react';
import { createStackNavigator, } from '@react-navigation/stack';
import { RootStackParamList } from './types/RootStackParamList';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home'
import RestaurantDetails from './screens/RestaurantDetails'

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation: React.FC = (): ReactElement => {

    const screenOptions = {
        headerShown: false,
    };

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions} initialRouteName={'Home'}>
                <Stack.Screen name='Home' component={Home}></Stack.Screen>
                <Stack.Screen name='About' component={RestaurantDetails}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default RootNavigation;
