import { StyleSheet } from 'react-native';
import { Colors, FontSizes } from '../../../../globals';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 30,
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    button: {
        marginTop: 20,
        padding: 13,
        position: 'relative',
        backgroundColor: Colors.Black,
        borderRadius: 30,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    showCartText: {
        fontSize: FontSizes.fontLarge,
        color: Colors.White,
        marginRight: 60,
    },
    cartSummaryText: {
        fontSize: FontSizes.fontLarge,
        color: Colors.White,
    },
});

export default styles;
