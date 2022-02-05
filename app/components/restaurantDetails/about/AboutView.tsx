import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { FontSizes, Glyphs } from '../../../globals/Typography';
import { RestaurantItem } from '../../../model/RestaurantItem';

const AboutView = (item: RestaurantItem) => {
  return (
    <View>
      <RestaurantImage image={item.imageSource} />
      <View style={{ marginVertical: 10, padding: 10 }}>
        <RestaurantName name={item.name} />
        <RestaurantDescription description={item.timeFoodReady} />
        <RestaurantCategories categories={item.categories} />
      </View>
    </View >
  );
};

const RestaurantCategories = ({ categories }: { categories: string[] }) =>
  <Text style={{ fontSize: FontSizes.fontMedium }}>{categories.join(` ${Glyphs.Dot} `)}</Text>

const RestaurantImage = ({ image }: { image: ImageSourcePropType }) => (
  <Image source={image} style={{ width: '100%', height: 180 }} />
)

const RestaurantName = ({ name }: { name: string }) => (
  <View>
    <Text style={{ fontWeight: 'bold' }}>{name}</Text>
  </View>
)

const RestaurantDescription = ({ description }: { description: string }) => (
  <View>
    <Text>{description}</Text>
  </View>
)

export default AboutView;
