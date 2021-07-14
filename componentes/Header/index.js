import React from 'react';
import { ScrollView, StyleSheet, Image, Text, View } from 'react-native';

import styles from './styles';
import log from '../../assets/foto.png';
import lo from '../../assets/opp.png';
import lol from '../../assets/ops.png';




const Header = () => {
    return(
        <>
        <ScrollView> 
        <View style={styles.espaco}>
        <Image style={styles.logo}></Image>
        <Text style={styles.buttonText}> Nome user </Text>
        </View>
       
        <View style={styles.container}>
        <Image style={styles.capa} source={log}>

</Image>
        </View>

        <View style={styles.espaco}>
        <Image style={styles.logo}></Image>
        <Text style={styles.buttonText}> Nome user </Text>
        </View>
       
        <View style={styles.container}>
        <Image style={styles.capa} source={lol}>

</Image>
        </View>
        <View style={styles.espaco}>
        <Image style={styles.logo}></Image>
        <Text style={styles.buttonText}> Nome user </Text>
        </View>
       
        <View style={styles.container}>
        <Image style={styles.capa} source={lo}>

</Image>
        </View>

        </ScrollView>
        
        </>
    );
};
export default Header;


