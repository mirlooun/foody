import { StyleSheet } from 'react-native';
import { FontSizes } from '../../../../../globals';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    checkBoxIcon: { borderColor: 'lightgray', borderRadius: 0 },
    foodInfoTitleText: { fontWeight: 'bold', fontSize: FontSizes.fontLarge }
});

export default styles;
