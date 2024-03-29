import React, { SetStateAction } from "react"
import { TouchableOpacity, Text } from "react-native"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Colors, Opacities } from '../../../../globals/styles/global-styles';
import styles from "./styles";

interface BottomTabItemProps {
    text: string,
    iconName: string,
    isActive: boolean,
    setActive: React.Dispatch<SetStateAction<string>>
}

export const BottomTabItemView = (props: BottomTabItemProps) => {
    return (
        <TouchableOpacity
            activeOpacity={Opacities.Medium}
            style={styles.container}
            onPress={() => props.setActive(props.text)}
        >
            <Icon icon={props.iconName} isActive={props.isActive} />
            <Text style={{ color: props.isActive ? Colors.Black : Colors.DarkGrey }}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const Icon = ({ icon, isActive }: { icon: string, isActive: boolean }) => {
    return <FontAwesome5
        name={icon}
        size={25}
        style={[styles.icon, { color: isActive ? Colors.Black : Colors.DarkGrey}]}
    />
}