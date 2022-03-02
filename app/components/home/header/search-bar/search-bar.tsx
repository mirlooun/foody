import React from 'react';
import { View, Text } from 'react-native';
import {
    GooglePlaceData,
    GooglePlaceDetail,
    GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styles } from './styles';
import { Address } from '../../../../screens/home/home';
interface SearchBarProps {
    setAddress: React.Dispatch<React.SetStateAction<Address | null>>;
}

interface GoogleData {
    geometry: {
        location: {
            lat: number;
            lng: number;
        };
    };
}


const API_KEY = "AIzaSyB2p9qdKJ-vMLXoC8jvqchw0ShnJSWJZ0c"

const SearchBar = ({ setAddress }: SearchBarProps) => {
    const handlePressSearch = (
        data: GooglePlaceData,
        details: GooglePlaceDetail | null
    ) => {
        setAddress({latitude: details?.geometry.location.lat!, longitude: details?.geometry.location.lng!})
    };

    
    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder="Search"
                query={{ key: API_KEY, location: 'Estonia', types: 'address' }}
                onPress={(data, details) => handlePressSearch(data, details)}
                styles={{
                    textInputContainer: styles.textInputContainer,
                    textInput: styles.textInput,
                }}
                fetchDetails={true}
                renderLeftButton={() => (
                    <View style={styles.leftButton}>
                        <IonIcon name="location-sharp" size={24}></IonIcon>
                    </View>
                )}
                renderRightButton={() => (
                    <View style={styles.rightButton}>
                        <AntDesign
                            name="clockcircle"
                            size={11}
                            style={{ marginRight: 6 }}
                        ></AntDesign>
                        <Text style={{ fontWeight: 'bold' }}>Search</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default SearchBar;
