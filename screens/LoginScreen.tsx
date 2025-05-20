import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export default function LoginScreen({ navigation }: Props) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const fazerLogin = async () => {
    if (usuario === 'Admin' && senha === '1234') {
      await AsyncStorage.setItem('logado', 'true');
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainApp' }],
      });
    } else {
      Alert.alert('Erro', 'Usuário ou senha inválidos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <Button title="Entrar" onPress={fazerLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center', 
    padding: 20,
    backgroundColor: '#232323',
  },
  title: { 
    fontSize: 30,
    marginBottom: 40,
    color: '#fff', 
    textAlign: 'center' 
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    color: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#383838'
  },
});
