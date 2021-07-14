import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons, EvilIcons,MaterialIcons,SimpleLineIcons, Feather } from '@expo/vector-icons';


import styles from './styles';


const Menu = () => {
    return(
        <View style={styles.hero}>
            
        <TouchableOpacity>
        <MaterialCommunityIcons name = "home-variant" size = {30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
        <EvilIcons name = "search" size = {24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
        <MaterialIcons name = "video-collection" size = {24} color="#000" />
        </TouchableOpacity>
        
        <TouchableOpacity>
        <MaterialIcons name = "local-grocery-store" size = {24} color = "#000" />
        </TouchableOpacity>
        <TouchableOpacity>
        <Feather name = "user" size = {24} color = "#000" />
        </TouchableOpacity>

        


        
    </View>
    );
};
export default Menu;