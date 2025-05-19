import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type DetalheRouteProp = RouteProp<RootStackParamList, 'DetalheMoto'>;

export default function DetalheMotoScreen() {
  const route = useRoute<DetalheRouteProp>();
  const { moto } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Moto</Text>
      <Text style={styles.detail}>Modelo: {moto.modelo}</Text>
      <Text style={styles.detail}>Placa: {moto.placa}</Text>
      <Text style={styles.detail}>Status: {moto.status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detail: {
    fontSize: 18,
    marginVertical: 5,
  },
});
