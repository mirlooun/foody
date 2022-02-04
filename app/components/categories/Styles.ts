import { StyleSheet } from "react-native"
import { Colors } from "../../globals/GlobalStyles"

export const styles = StyleSheet.create({
    scrollContainer: { 
        marginTop: 5, 
        backgroundColor: Colors.Grey
    },
    scrollBody: {
        marginTop: 5,
        paddingVertical: 10,
        paddingLeft: 20,
        backgroundColor: Colors.White
    },
    scrollItemContainer: {
        padding: 10,
        marginRight: 20,
        alignItems: 'center'
    },
    scrollItemImage: {
        width: 50,
        height: 40, resizeMode: 'contain'
    },
    scrollItemText: { 
        fontSize: 13, 
        fontWeight: "bold" 
    }
})
