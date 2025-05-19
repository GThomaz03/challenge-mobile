import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ListaMotos'>;

type Moto = {
  modelo: string;
  placa: string;
  status: string;
  manutencao: string;
};

export default function ConfigScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [motos, setMotos] = useState<Moto[]>([]);
  const [filtro, setFiltro] = useState('');

  const carregarMotos = async () => {
    try {
      const dados = await AsyncStorage.getItem('motos');
      if (dados) {
        setMotos(JSON.parse(dados));
      } else {
        setMotos([]);
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar as motos.');
    }
  };

  useEffect(() => {
    carregarMotos();
  }, []);

  const logout = async () => {
    await AsyncStorage.removeItem('logado');
    Alert.alert('Logout', 'Você saiu da conta');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  const motosFiltradas = motos.filter((m) =>
    m.placa.toLowerCase().includes(filtro.toLowerCase())
  );

  const abrirDetalhe = (moto: Moto) => {
    navigation.navigate('DetalheMoto', { moto });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar moto</Text>

      <Button title="Atualizar Lista" onPress={carregarMotos} color="#007AFF" />

      <Text style={styles.sectionTitle}>Buscar moto por placa</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a placa"
        value={filtro}
        onChangeText={setFiltro}
      />

      <FlatList
        data={motosFiltradas}
        keyExtractor={(item) => item.placa}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => abrirDetalhe(item)}
          >
            <Text style={styles.placa}>{item.placa}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 10 }}>
            Nenhuma moto encontrada.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  sectionTitle: { fontSize: 18, marginTop: 20, marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginBottom: 10,
    borderRadius: 6,
  },
  placa: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
