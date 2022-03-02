
import React, { ReactNode, SetStateAction, useState } from 'react';
import { View } from 'react-native';
import { BottomTabItemView } from './bottom-tabs-item/bottom-tabs-item';
import getBottomTabsList from './items/bottom-tabs-items-list';
import styles from './styles';

const BottomTabs = () => {
    const [activeTab, setActiveTab] = useState('Home');

    return (
        <View style={styles.container}>
            {getBottomTabsList().map((tab, index) =>
            (
                <BottomTabItemView
                    key={index}
                    text={tab.name}
                    iconName={tab.iconName}
                    isActive={activeTab === tab.name}
                    setActive={setActiveTab}
                />
            ))}
        </View>
    );
};

export default BottomTabs;
