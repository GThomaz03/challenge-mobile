import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


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
    backgroundColor: '#232323',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapa: {
    height: 300,
    width: 300,
    display: 'flex',
    backgroundColor: '#999',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
