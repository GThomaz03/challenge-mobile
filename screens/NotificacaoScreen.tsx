import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Cores from '../Cores';

const notifications = [
  { id: '1', text: 'Moto de placa: DDR4G6 está na zona: Manutenção.' },
  { id: '2', text: 'Nova moto de placa: RFJ7H2 adicionada ao pátio.' },
];

export default function NotificacaoScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.notification}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: Cores.background,
  },
  notification: {
    padding: 15,
    borderBottomWidth: 1,
    backgroundColor: Cores.primary,
    borderColor: Cores.border,
    borderRadius: 10,
    marginTop: 5
  },
});
