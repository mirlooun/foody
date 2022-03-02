import React from 'react';
import { View } from 'react-native';

interface SpaceProps {
    height: number | string | 0;
    opacity: number;
}


export const Space = ({ height, opacity }: SpaceProps) => (
    <View
        style={{
            height: height,
            backgroundColor: `rgba(0, 0, 0, ${opacity})`,
        }}
    ></View>
);
