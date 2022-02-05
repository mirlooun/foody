import React from 'react';
import { ScrollView, View } from 'react-native';
import { CategoryItem } from '../../../model/CategoryItem';
import CategoryItemView from './CategoryItemView';
import { styles } from './Styles';

const CategoryListView = (props: {items: CategoryItem[]}) => {
    return (
        <View style={styles.scrollContainer}>
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

export default CategoryListView;
