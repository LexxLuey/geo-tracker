import { StyleSheet, View } from 'react-native'
import React from 'react'
import FeaturedList from '../components/home/FeaturedList';
import Header from '../components/home/Header';
import Navbar from '../components/home/Navbar';
import BaseScreen from './BaseScreen';


const Index = () => {
    return (
        <BaseScreen>
            <Header />
            <View style={styles.screen}>
                <FeaturedList />
            </View>
        </BaseScreen>
    )
}

export default Index

const styles = StyleSheet.create({
    screen: {
        // padding: '3%'
    }
});