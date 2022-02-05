import { StyleSheet } from "react-native"
import { Colors } from "../../../globals/GlobalStyles"

export const styles = StyleSheet.create({
    restaurantItemContainer: {
        marginTop: 10,
        marginBottom: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: Colors.White,
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
        backgroundColor: Colors.Grey,
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    restaurantItemRaitingText: {
        fontSize: 12
    }
})
