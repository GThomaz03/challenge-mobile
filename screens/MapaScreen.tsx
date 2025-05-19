// MapScreen.js (usando Leaflet para web compatibilidade)
import React from 'react';
import 'leaflet/dist/leaflet.css';
import { View, Text, StyleSheet } from 'react-native';



export default function MapaScreen() {
  return (
    <View style={styles.container}>
        <Text>Mapa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  map: {
    height: 100, // altura total na web
    width: '100%',   // largura total
  },
  popupText: {
    color: '#000',
  },
});
