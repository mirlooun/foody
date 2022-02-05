import { RestaurantItem } from "../model/RestaurantItem";
import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
    Home: undefined;
    About: { item: RestaurantItem }
};

export type Props = StackScreenProps<RootStackParamList>;