import React from 'react';
import { View, Image, Text } from 'react-native';
import { CategoryItem } from '../../../../model/category-item';
import styles from './styles';

const CategoryItemView = ({ item }: { item: CategoryItem }) => {
    return (
        <View style={styles.scrollItemContainer}>
            <Image source={item.image} style={styles.scrollItemImage}></Image>
            <Text style={styles.scrollItemText}>{item.text}</Text>
        </View>
    );
};

export default CategoryItemView;
