import React from 'react';
import { useState } from 'react';
import {
    Image,
    ImageSourcePropType,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Glyphs } from '../../../../globals';
import { Colors } from '../../../../globals/styles/global-styles';
import { Restaurant } from '../../../../model/restaurant-item';
import { Props } from '../../../../types/RootStackParamList';
import styles from './styles';

interface RestaurantItemProps {
    item: Restaurant;
    navigation: Props['navigation'];
}

const RestaurantItem = (props: RestaurantItemProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={styles.restaurantItemContainer}
            onPress={() =>
                props.navigation.navigate('About', { item: props.item })
            }
        >
            <RestaurantImage source={{ uri: props.item.image.url }} />
            <RestaurantInfo item={props.item}></RestaurantInfo>
        </TouchableOpacity>
    );
};

const RestaurantImage = ({ source }: { source: ImageSourcePropType }) => {
    const [selected, setSelected] = useState(false);

    const handleOnPress = () => {
        setSelected(!selected);
    };

    return (
        <View>
            <Image source={source} style={styles.restaurantItemImage}></Image>
            <TouchableOpacity style={styles.restaurantItemHeartIconContainer}>
                <MaterialCommunityIcons
                    name={selected ? 'heart' : 'heart-outline'}
                    size={25}
                    color={Colors.White}
                    onPress={handleOnPress}
                ></MaterialCommunityIcons>
            </TouchableOpacity>
        </View>
    );
};

const RestaurantInfo = ({ item }: { item: Restaurant }) => {
    return (
        <View style={styles.restaurantItemInfoContainer}>
            <View>
                <Text style={styles.restaurantItemInfoText}>{item.title}</Text>
                <Text style={{ fontSize: 12 }}>
                    {getFormattedEstimatedTime(item.venue.estimate_range)}
                </Text>
            </View>
            <View style={styles.restaurantItemRaitingContainer}>
                <Text style={styles.restaurantItemRaitingText}>
                    {item.venue.rating.score}
                </Text>
            </View>
        </View>
    );
};

function getFormattedEstimatedTime(estimated: string) {
    return estimated.split('-').join(` ${Glyphs.Dot} `).concat(' min');
}

export default RestaurantItem;
