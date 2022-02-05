import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../../globals/GlobalStyles';
import { styles } from './Styles';

const HeaderTabsView = () => {
    const [active, setActive] = useState("Delivery");

    return (
        <SafeAreaView style={styles.headerBody}>
            <HeaderButton
                text={"Delivery"}
                isActive={active === "Delivery"}
                setActive={setActive} />
            <HeaderButton
                text={"Pickup"}
                isActive={active === "Pickup"}
                setActive={setActive}
            />
        </SafeAreaView>
    );
}

const HeaderButton = (props: { text: string, isActive: boolean, setActive: Function }) => {
    return (
        <TouchableOpacity
            style={[styles.headerButton, { backgroundColor: props.isActive ? Colors.Black : Colors.White }]}
            onPress={() => props.setActive(props.text)}
        >
            <Text style={[styles.headerButtonText, { color: props.isActive ? Colors.White : Colors.Black }]}>{props.text}</Text>
        </TouchableOpacity>
    );
}

export default HeaderTabsView;
