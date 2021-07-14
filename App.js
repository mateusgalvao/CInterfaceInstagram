import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Cabecalho from './componentes/cabecalho/';
import History from './componentes/history';
import Header from './componentes/Header';
import Menu from './componentes/Menu';



export default function App() {
  return (
    <ScrollView>
      <Cabecalho></Cabecalho>
        <History></History>
          <Header></Header>
            <Menu></Menu>

    </ScrollView>
    
  );
}


