import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FeaturedProduct = (props) => {
    return (
        <View style={styles.listItem}>
            <Text> {props.product} </Text>
        </View>
    )
}

export default FeaturedProduct

const styles = StyleSheet.create({

    listItem: {

        padding: 50,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        flex: 1, 
        margin: 5
    }
})