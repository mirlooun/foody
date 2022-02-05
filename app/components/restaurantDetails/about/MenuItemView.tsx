import React from 'react';
import { Image, View, Text, ImageSourcePropType } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { FontSizes } from '../../../globals/Typography';
import { MenuItem } from '../../../model/MenuItem';

type FoodInfoProps = {
    title: string,
    description: string,
    price: string
}

export const MenuItemView: React.FC<MenuItem> = (item) => (
    <View style={{
        marginHorizontal: 20,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}
    >
        <BouncyCheckbox
            iconStyle={{ borderColor: 'lightgray', borderRadius: 0 }}
            fillColor={'green'}
        />
        <FoodInfo {...item} />
        <FoodImage image={item.image} />
    </View>
);

const FoodInfo = (props: FoodInfoProps) => (
    <View style={{ width: 150, justifyContent: 'space-evenly' }}>
        <Text style={{ fontWeight: 'bold', fontSize: FontSizes.fontLarge }}>{props.title}</Text>
        <Text>{props.description}</Text>
        <Text>{props.price}</Text>
    </View>
)

const FoodImage = ({ image }: { image: ImageSourcePropType }) => (
    <Image source={image} style={{ width: 100, height: 100, borderRadius: 15 }} />
)
