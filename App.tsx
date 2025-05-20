import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppTabs from './AppTabs';
import LoginScreen from './screens/LoginScreen';
import DetalheMotoScreen from './screens/DetalheMotoScreen';

const {Navigator, Screen} = createNativeStackNavigator();

export default function App() {
  const [logado, setLogado] = useState<boolean | null>(null);

  useEffect(() => {
    const verificarLogin = async () => {
      const status = await AsyncStorage.getItem('logado');
      setLogado(status === 'true');
    };
    verificarLogin();
  }, []);

  if (logado === null) return null;

  return (
    <NavigationContainer>
      <Navigator initialRouteName={logado ? 'MainApp' : 'Login'}>
        {!logado && (
          <Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
        <Screen
          name="MainApp"
          component={AppTabs}
          options={{ headerShown: false }}
        />
        <Screen
          name="DetalheMoto"
          component={DetalheMotoScreen}
          options={{ title: 'Detalhes da Moto' }}
        />
      </Navigator>
    </NavigationContainer>
  );
}