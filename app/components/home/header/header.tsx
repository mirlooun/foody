import React from 'react';
import { View, StatusBar } from 'react-native';
import HeaderTabs from './header-tabs/header-tabs/header-tabs';
import SearchBar from './search-bar/search-bar';
import styles from './styles';

export const Header = ({ children }: { children: JSX.Element[] }) => {
    return (
        <View>
            <StatusBar barStyle={'dark-content'} />
            <View style={styles.header}>
                {children}
            </View>
        </View>
    );
};
