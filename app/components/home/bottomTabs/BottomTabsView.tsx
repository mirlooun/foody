
import React, { ReactNode, SetStateAction, useState } from 'react';
import { View } from 'react-native';
import { BottomTabItemView } from './BottomTabsItemView';
import getBottomTabsList from './BottomTabsList';

import { styles } from './Style';

const BottomTabsView = (): ReactNode => {
    const [activeTab, setActiveTab] = useState('Home');

    return (
        <View style={styles.bottomTabsContainer}>
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

export default BottomTabsView;
