import React from 'react';
import { Image, ImageSourcePropType, Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../../globals/GlobalStyles';
import { RestaurantItem } from '../../../model/RestaurantItem';
import { Props } from '../../../types/RootStackParamList';
import { styles } from './Styles';

const RestaurantItemView = (props: { navigation: Props['navigation'], item: RestaurantItem }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={styles.restaurantItemContainer}
            onPress={() => props.navigation.navigate('About', { item: props.item })}
        >
            <RestaurantImage source={props.item.imageSource} />
            <RestaurantInfo item={props.item}></RestaurantInfo>
        </TouchableOpacity>
    )
};

const RestaurantImage = (props: { source: ImageSourcePropType }) => (
    <View>
        <Image source={props.source} style={styles.restaurantItemImage}></Image>
        <TouchableOpacity style={styles.restaurantItemHeartIconContainer}>
            <MaterialCommunityIcons name='heart-outline' size={25} color={Colors.White}></MaterialCommunityIcons>
        </TouchableOpacity>
    </View>
)

const RestaurantInfo = (props: { item: RestaurantItem }) => (
    <View style={styles.restaurantItemInfoContainer}>
        <View>
            <Text style={{ fontWeight: 'bold' }}>{props.item.name}</Text>
            <Text style={{ fontSize: 12 }}>{props.item.timeFoodReady}</Text>
        </View>
        <View style={styles.restaurantItemRaitingContainer}>
            <Text style={styles.restaurantItemRaitingText}>{props.item.rating}</Text>
        </View>
    </View >
)

export default RestaurantItemView;
