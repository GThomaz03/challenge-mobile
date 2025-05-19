// AppTabs.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import MapaScreen from './screens/MapaScreen';
import NotificacaoScreen from './screens/NotificacaoScreen';
import ConfigScreen from './screens/ConfigScreen';
import ListaMotosScreen from './screens/ListaMotosScreen';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Mapa" component={MapaScreen} />
      <Tab.Screen name="ListaMotos" component={ListaMotosScreen} />
      <Tab.Screen name="Notificacao" component={NotificacaoScreen} />
      <Tab.Screen name="Config" component={ConfigScreen} />
    </Tab.Navigator>
  );
}
