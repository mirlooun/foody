import React from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styles } from './Styles';
import { Colors } from '../../../globals/GlobalStyles';

const SearchBarView = () => {
    return (
        <View style={styles.searchBarContainer}>
            <GooglePlacesAutocomplete placeholder='Search' query={""}
                styles={{
                    textInput: {
                        marginTop: 7,
                        borderRadius: 20,
                        fontWeight: "700",
                        backgroundColor: Colors.Grey,
                    },
                    textInputContainer: {
                        marginRight: 15,
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: Colors.Grey
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
                        backgroundColor: Colors.White,
                    }}>
                        <AntDesign name='clockcircle' size={11} style={{ marginRight: 6 }}></AntDesign>
                        <Text style={{ fontWeight: 'bold' }}>Search</Text>
                    </View>}
            />
        </View>
    );
};

export default SearchBarView;
