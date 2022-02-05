
import React from 'react';
import { View, Image, Text } from 'react-native';
import { CategoryItem } from '../../../model/CategoryItem';
import { styles } from './Styles';

const CategoryItemView = (props: { item: CategoryItem }) => {
    return <View style={styles.scrollItemContainer}>
        <Image
            source={props.item.image}
            style={styles.scrollItemImage}>
        </Image>
        <Text style={styles.scrollItemText}>{props.item.text}</Text>
    </View>;
};

export default CategoryItemView;
