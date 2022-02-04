import React from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const SearchBar = () => {
    return (
        <View style={{ marginTop: 15, flexDirection: 'row' }}>
            <GooglePlacesAutocomplete placeholder='Search' query={""}
                styles={{
                    textInput: {
                        backgroundColor: "#eee",
                        borderRadius: 20,
                        fontWeight: "700",
                        marginTop: 7
                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 15
                    }
                }}
                renderLeftButton={() =>
                    <View style={{ marginLeft: 10 }}>
                        <IonIcon name='location-sharp' size={24}></IonIcon>
                    </View>}
                renderRightButton={() =>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 9,
                        marginRight: 8,
                        borderRadius: 30,
                        backgroundColor: 'white',
                    }}>
                        <AntDesign name='clockcircle' size={11} style={{ marginRight: 6 }}></AntDesign>
                        <Text style={{ fontWeight: 'bold' }}>Search</Text>
                    </View>}
            />
        </View>
    );
};
