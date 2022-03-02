import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import OrderSummary from '../../components/checkout/order-summary/order-summary';
import { Opacities } from '../../globals';
import { Space } from '../../globals/components/space';
import { RestaurantMenuItemContainer } from '../../types/State';
import styles from './styles'

interface CheckoutProps {
    restaurantName: string;
    total: string;
    selectedItems: RestaurantMenuItemContainer[];
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Checkout = ({
    restaurantName,
    total,
    selectedItems,
    setVisible,
}: CheckoutProps) => {
    return (
        <View style={{ flex: 1 }}>
            <Space height={'40%'} opacity={0.7} />
            <View style={styles.container}>
                <View>
                    <Text style={styles.restaurantTitle}>{restaurantName}</Text>
                    <OrderSummary
                        items={selectedItems.map(
                            (itemContainer) => itemContainer.item
                        )}
                    />
                    <Text>Subtotal: {total}</Text>
                    <TouchableOpacity
                        activeOpacity={Opacities.High}
                        delayPressOut={50}
                        style={styles.button}
                        onPress={() => setVisible(false)}
                    >
                        <Text style={styles.showCartText}>Checkout</Text>
                        <Text style={styles.cartSummaryText}>{total}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Checkout;
