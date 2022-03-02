interface BottomTabItem {
    name: string;
    iconName: string;
}

export default function getBottomTabsList(): BottomTabItem[] {
    return [
        {
            name: 'Home',
            iconName: 'home',
        },
        {
            name: 'Browse',
            iconName: 'search',
        },
        {
            name: 'Grocery',
            iconName: 'shopping-bag',
        },
        {
            name: 'Orders',
            iconName: 'receipt',
        },
        {
            name: 'Account',
            iconName: 'user',
        },
    ];
}
