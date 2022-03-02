import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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

export default styles;