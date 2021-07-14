import React from 'react';
import { Text, View, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons, EvilIcons, AntDesign } from '@expo/vector-icons';


import styles from './styles';

import log from "../../assets/o.png";


const Cabecalho = () => {
    return (
        <View style={styles.header}>
            <Image style={styles.hero} source={log} >
                 </Image>
            <View style={styles.headerSafeAreaView}>
            
                <TouchableOpacity >
                <AntDesign name="pluscircleo" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                <AntDesign name="hearto" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                <MaterialCommunityIcons name="telegram" size={24} color="#000" />   
                </TouchableOpacity>
            </View>
        </View >
    );
};

export default Cabecalho;