import { StyleSheet } from "react-native"
import { Colors } from "../../globals/GlobalStyles"

export const styles = StyleSheet.create({
    restaurantItemContainer: {
        backgroundColor: Colors.White,
        marginBottom: 30,
        marginTop: 10,
        padding: 10
    },
    restaurantItemImage: {
        width: '100%',
        height: 180,
        marginBottom: 10
    },
    restaurantItemHeartIconContainer: {
        position: 'absolute',
        right: 20,
        top: 20
    },
    restaurantItemInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    restaurantItemRaitingContainer: {
        backgroundColor: Colors.White,
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    }
})
