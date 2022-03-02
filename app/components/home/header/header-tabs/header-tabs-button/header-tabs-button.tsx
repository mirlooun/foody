import { SetStateAction } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Colors } from '../../../../../globals/styles/global-styles';
import styles from './styles';

interface ButtonProps {
    text: string;
    isActive: boolean;
    setActive: React.Dispatch<SetStateAction<string>>;
}

const HeaderTabsButton = (props: ButtonProps) => {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                {
                    backgroundColor: props.isActive
                        ? Colors.Black
                        : Colors.White,
                },
            ]}
            onPress={() => props.setActive(props.text)}
        >
            <Text
                style={[
                    styles.text,
                    { color: props.isActive ? Colors.White : Colors.Black },
                ]}
            >
                {props.text}
            </Text>
        </TouchableOpacity>
    );
};

export default HeaderTabsButton;
