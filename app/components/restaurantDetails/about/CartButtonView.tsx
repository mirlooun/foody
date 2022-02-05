import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../../../globals/GlobalStyles';
import { Props } from '../../../types/RootStackParamList';

export const CartButtonView = ({ navigation, restaurantName }: { navigation: Props['navigation'], restaurantName: string }) => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      position: 'absolute',
      bottom: 30,
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
      }}>
        <TouchableOpacity activeOpacity={0.7} style={{
          marginTop: 20,
          padding: 13,
          position: 'relative',
          backgroundColor: Colors.Black,
          borderRadius: 30,
          width: 300,
          alignItems: 'center'
        }}
        >
          <Text style={{ textAlign: 'center', color: Colors.White }}>Show cart</Text>
        </TouchableOpacity>
      </View>
    </View >
  )
};
