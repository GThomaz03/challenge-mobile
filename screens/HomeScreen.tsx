// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo ao Mottu Gestão de Motos!</Text>
      <Text style={styles.subtext}>Escolha uma opção no menu para começar.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#232323',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtext: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
});
