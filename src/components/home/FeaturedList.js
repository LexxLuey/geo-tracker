import { FlatList, StyleSheet, Text, View } from 'react-native'
import FeaturedProduct from './FeaturedProduct'

export default function FeaturedList(props) {
    const data = [
        { name: 'Kpomo', id: 1 },
        { name: 'Beef', id: 2 },
        { name: 'Kilishi', id: 3 },
        { name: 'Fish', id: 4 },
        { name: 'Kpomo', id: 1 },
        { name: 'Beef', id: 2 },
        { name: 'Kilishi', id: 3 },
        { name: 'Fish', id: 4 },
        { name: 'Kpomo', id: 1 },
        { name: 'Beef', id: 2 },
        { name: 'Kilishi', id: 3 },
        { name: 'Fish', id: 4 },
        { name: 'Kpomo', id: 1 },
        { name: 'Beef', id: 2 },
        { name: 'Kilishi', id: 3 },
        { name: 'Fish', id: 4 },
        { name: 'Kpomo', id: 1 },
        { name: 'Beef', id: 2 },
        { name: 'Kilishi', id: 3 },
        { name: 'Fish', id: 4 },
        { name: 'Kpomo', id: 1 },
        { name: 'Beef', id: 2 },
        { name: 'Kilishi', id: 3 },
        { name: 'Fish', id: 4 },
    ]
    return (
        <View style={styles.featureRow}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index}
                numColumns={2}
                contentContainerStyle={{ paddingHorizontal: 10 }}
                renderItem={(itemData) => {
                    return (
                        <FeaturedProduct product={itemData.item.name} />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    featureRow: {
        // padding: 20,
        // flexDirection: "row",
    },
})