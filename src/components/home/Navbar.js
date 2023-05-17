import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Settings')}>
                <Ionicons name='notifications' size={28} color='gray' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Settings')}>
                <Ionicons name='settings' size={28} color='gray' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.avatarContainer} onPress={() => navigation.navigate('Settings')}>
                <Image style={styles.avatar} source={{ uri: 'https://placeimg.com/200/200/people' }} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: '7%',
        marginBottom: '0.2%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 10,
        height: 60,
        backgroundColor: 'white',
    },
    iconContainer: {
        paddingHorizontal: 10,
    },
    avatarContainer: {
        marginLeft: 10,
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden',
    },
    avatar: {
        width: '100%',
        height: '100%',
    },
});

export default Navbar;
