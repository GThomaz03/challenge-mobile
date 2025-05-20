import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

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
    backgroundColor: '#232323'
  },
  notification: {
    padding: 15,
    borderBottomWidth: 1,
    backgroundColor: '#9de695',
    borderRadius: 10,
    marginTop: 5
  },
});
