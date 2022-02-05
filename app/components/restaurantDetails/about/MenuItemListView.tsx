import React from 'react';
import { ScrollView, View } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { Space } from '../../../globals/components/Space';
import { MenuItem } from '../../../model/MenuItem';
import { MenuItemView } from './MenuItemView';

const MenuItemListView = ({ foodList }: { foodList: MenuItem[] }) => (
    <ScrollView showsVerticalScrollIndicator={false}>
        {foodList.map((item, index) =>
        (
            <View key={index}>
                <MenuItemView  {...item} />
                <Divider
                    width={0.5}
                    orientation="vertical"
                    style={{ marginHorizontal: 20 }}
                />
            </View>
        ))}
        <Space height={100} />
    </ScrollView>
);

export default MenuItemListView;
