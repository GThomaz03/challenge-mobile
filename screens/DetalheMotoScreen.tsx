import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { DetalheRouteProp } from '../types';


export default function DetalheMotoScreen() {
  const route = useRoute<DetalheRouteProp>();
  const { moto } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.infos}>
        <Text style={styles.title}>Detalhes da Moto</Text>
        <Text style={styles.detail}>Modelo: {moto.modelo}</Text>
        <Text style={styles.detail}>Placa: {moto.placa}</Text>
        <Text style={styles.detail}>Status: {moto.status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#232323',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
  },
  infos: {
    backgroundColor: '#383838',
    borderWidth: 1,
    borderColor: "#121212",
    borderRadius: 15,
    padding: 20,
  },
  detail: {
    fontSize: 18,
    marginVertical: 5,
  },
});
