import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  TextInput,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'MainApp'>;

type Moto = {
  modelo: string;
  placa: string;
  status: string;
};

export default function ConfigScreen() {
  const navigation = useNavigation<NavigationProp>();

  const [modelo, setModelo] = useState('');
  const [placa, setPlaca] = useState('');
  const [status, setStatus] = useState('');

  const salvarMoto = async () => {
    if (!modelo || !placa || !status) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    const novaMoto: Moto = { modelo, placa, status };

    try {
      const dados = await AsyncStorage.getItem('motos');
      const lista: Moto[] = dados ? JSON.parse(dados) : [];
      lista.push(novaMoto);
      await AsyncStorage.setItem('motos', JSON.stringify(lista));
      Alert.alert('Sucesso', 'Moto cadastrada com sucesso!');
      // limpar os campos
      setModelo('');
      setPlaca('');
      setStatus('');
    } catch (e) {
      Alert.alert('Erro', 'Erro ao salvar moto.');
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('logado');
    Alert.alert('Logout', 'Você saiu da conta');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <Button title="Sair" onPress={logout} />

      <Text style={styles.sectionTitle}>Cadastrar nova moto</Text>

      <TextInput
        placeholder="Modelo"
        value={modelo}
        onChangeText={setModelo}
        style={styles.input}
      />
      <TextInput
        placeholder="Placa"
        value={placa}
        onChangeText={setPlaca}
        style={styles.input}
      />
      <TextInput
        placeholder="Status"
        value={status}
        onChangeText={setStatus}
        style={styles.input}
      />

      <Button title="Salvar Moto" onPress={salvarMoto} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 60,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    marginTop: 30,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
});
