import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cores from '../Cores';

export default function MapaScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.mapa}>
        <Text>Mapa</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Cores.background,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapa: {
    height: 300,
    width: 300,
    display: 'flex',
    backgroundColor: '#9de695',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
