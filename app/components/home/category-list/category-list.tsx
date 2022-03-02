import React from 'react';
import { ScrollView, View } from 'react-native';
import { CategoryItem } from '../../../model/category-item';
import CategoryItemView from './category-list-item/category-item';
import styles from './styles';

const CategoryList = (props: {items: CategoryItem[]}) => {
    return (
        <View style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false}
                horizontal
                style={styles.scrollBody}>
                {props.items.map((item, index) => (
                    <CategoryItemView key={index} item={item} />
                ))}
            </ScrollView>
        </View>
    );
};

export default CategoryList;
