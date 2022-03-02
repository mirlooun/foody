import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../../../../globals/styles/global-styles';
import HeaderTabsButton from '../header-tabs-button/header-tabs-button';
import styles from './styles';


const HeaderTabs = () => {
    const [active, setActive] = useState("Delivery");

    return (
        <SafeAreaView style={styles.container}>
            <HeaderTabsButton
                text={"Delivery"}
                isActive={active === "Delivery"}
                setActive={setActive} />
            <HeaderTabsButton
                text={"Pickup"}
                isActive={active === "Pickup"}
                setActive={setActive}
            />
        </SafeAreaView>
    );
}

export default HeaderTabs;
