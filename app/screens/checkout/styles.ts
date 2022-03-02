import { StyleSheet } from 'react-native';
import { Colors, FontSizes } from '../../globals';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 20,
        alignContent: 'center'
    },
    restaurantTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: FontSizes.fontLarge,
        marginBottom: 10
    },
    button: {
        marginTop: 20,
        padding: 13,
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
