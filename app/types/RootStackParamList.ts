import { Restaurant } from '../model/restaurant-item';
import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
    Home: undefined;
    About: { item: Restaurant };
};

export type Props = StackScreenProps<RootStackParamList>;
