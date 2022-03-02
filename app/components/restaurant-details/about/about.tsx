import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { FontSizes, Glyphs } from '../../../globals/typography/typography';
import { Restaurant } from '../../../model/restaurant-item';
import styles from './styles';

const AboutRestaurant = ({ item }: { item: Restaurant }) => {
    return (
        <View>
            <RestaurantImage image={{uri: item.image.url}} />
            <View style={styles.textInfoContainer}>
                <RestaurantName name={item.title} />
                <RestaurantDescription description={item.venue.estimate_range} />
                <RestaurantCategories categories={item.venue.tags} />
            </View>
        </View>
    );
};

const RestaurantCategories = ({ categories }: { categories: string[] }) => {
    const categoriesList = categories.join(` ${Glyphs.Dot} `);
    return (
        <Text style={{ fontSize: FontSizes.fontMedium }}>{categoriesList}</Text>
    );
};

const RestaurantImage = ({ image }: { image: ImageSourcePropType }) => (
    <Image source={image} style={styles.restaurantImage} />
);

const RestaurantName = ({ name }: { name: string }) => (
    <View>
        <Text style={styles.restaurantNameText}>{name}</Text>
    </View>
);

const RestaurantDescription = ({ description }: { description: string }) => (
    <View>
        <Text>{description}</Text>
    </View>
);

export default AboutRestaurant;
