import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { DetalheRouteProp } from '../types';
import Cores from '../Cores';


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
    backgroundColor: Cores.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
    color: Cores.text,
  },
  infos: {
    backgroundColor: '#dfdfdf',
    borderWidth: 1,
    borderColor: Cores.border,
    borderRadius: 15,
    padding: 20,
  },
  detail: {
    fontSize: 18,
    marginVertical: 5,
  },
});
