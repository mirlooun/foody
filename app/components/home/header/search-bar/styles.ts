import { StyleSheet } from 'react-native';
import { Colors } from '../../../../globals/styles/global-styles';

export const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    leftButton: { marginLeft: 10 },
    rightButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 9,
        marginRight: 8,
        borderRadius: 30,
        backgroundColor: Colors.White,
    },
    textInput: {
        marginTop: 7,
        borderRadius: 20,
        fontWeight: '700',
        backgroundColor: Colors.Grey,
    },
    textInputContainer: {
        marginRight: 15,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.Grey,
    },
});
