import React from 'react';
import { View, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/NavbarStyles';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.navbar}>
            <View style={styles.iconContainer}>
                <Pressable>
                    <Icon name="search" size={25} color="black" />
                </Pressable>
            </View>
            <TextInput
                style={styles.searchBar}
                placeholder="Search"
                placeholderTextColor="gray"
            />
            <Pressable style={styles.iconContainer}>
                
                <Icon name="filter" size={25} color="black" />
            </Pressable>
            <Pressable style={styles.iconContainer}>
                <Icon name="shopping-cart" size={25} color="black" />
            </Pressable>
        </View>
    );
};


export default Navbar;
