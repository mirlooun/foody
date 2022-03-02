import React, { useState } from 'react';
import { Text, View, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Props } from '../../../../types/RootStackParamList';
import styles from './styles';
import { Opacities } from '../../../../globals';
import { useSelector } from 'react-redux';
import {  State } from '../../../../redux';
import { getCartTotal } from './helpers';
import Checkout from '../../../../screens/checkout/checkout';

const CartButton = ({
    navigation,
    restaurantName,
}: {
    navigation: Props['navigation'];
    restaurantName: string;
}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const selectedItems = useSelector(
        (state: State) => state.cartReducer.selectedItems.items
    );

    const total = getCartTotal(selectedItems);

    const checoutModalContent = () => {
        return (
            <Checkout
                restaurantName={restaurantName}
                total={total}
                selectedItems={selectedItems}
                setVisible={setModalVisible}
            />
        );
    };

    return (
        <>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                {checoutModalContent()}
            </Modal>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <TouchableOpacity
                        activeOpacity={Opacities.High}
                        delayPressOut={50}
                        style={styles.button}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.showCartText}>Show cart</Text>
                        <Text style={styles.cartSummaryText}>{total}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default CartButton;
