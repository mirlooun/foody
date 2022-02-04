import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';

const items = [
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "Pick-up"
    },
    {
        image: require("../assets/images/soft-drink.png"),
        text: "Soft Drinks"
    },
    {
        image: require("../assets/images/bread.png"),
        text: "Bakkery Items"
    },
    {
        image: require("../assets/images/fast-food.png"),
        text: "Fast food"
    },
    {
        image: require("../assets/images/coffee.png"),
        text: "Coffee & Tea"
    },
    {
        image: require("../assets/images/deals.png"),
        text: "Deals"
    },
    {
        image: require("../assets/images/desserts.png"),
        text: "Desserts"
    },
    {
        image: require("../assets/images/splash.png"),
        text: "Splash"
    },
]

const Categories = () => {
    return (
        <View style={{ marginTop: 5, backgroundColor: "#eee" }}>
            <ScrollView showsHorizontalScrollIndicator={false}
                horizontal
                style={{
                    marginTop: 5,
                    paddingVertical: 10,
                    paddingLeft: 20,
                    backgroundColor: 'white'
                }}>
                {items.map((item, index) => (
                    <View key={index} style={{
                        padding: 10,
                        marginRight: 20,
                        alignItems: 'center'
                    }}>
                        <Image
                            source={item.image}
                            style={{
                                width: 50,
                                height: 40, resizeMode: 'contain'
                            }}>
                        </Image>
                        <Text style={{ fontSize: 13, fontWeight: "bold" }}>{item.text}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default Categories;