import React from 'react';
import { SafeAreaView, View, Image, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';
import logo from '../../assets/opp.png';
import { LinearGradient } from 'expo-linear-gradient';



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'dniwseihf',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'dniwseihf',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'dniwseihf',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'fdwerf',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.oval}>
    <Text style={styles.oval}>{title}</Text>
  </View>
);

const History = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <View style={styles.container}>
      <FlatList
      horizontal
      style={styles.flacontainer}
        data={DATA}
        renderItem={renderItem => (
          <TouchableOpacity>
            <View style={styles.oval}>
              <ImageBackground 
              style={styles.capa} source={logo} > </ImageBackground>
            </View>
          </TouchableOpacity>

        )} 
      /> 
    </View>
  );
}

export default History;