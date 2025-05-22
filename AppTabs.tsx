import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import MapaScreen from './screens/MapaScreen';
import NotificacaoScreen from './screens/NotificacaoScreen';
import ConfigScreen from './screens/ConfigScreen';
import ListaMotosScreen from './screens/ListaMotosScreen';
import {Feather, Ionicons, Octicons } from '@expo/vector-icons';
import Cores from './Cores';

const {Navigator, Screen} = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Navigator screenOptions={{
      headerShown: false, 
      tabBarStyle:{
        backgroundColor: Cores.barBackground,
        borderWidth: 0,
        },
      tabBarActiveTintColor: Cores.barTintColorActive,
      tabBarInactiveTintColor: Cores.barTintColorInactive,
      animation: 'shift'
        }} >
      {/* <Screen name="Home" component={HomeScreen} options={{
        title: "Home",
        tabBarIcon: ()=>
          <Feather name="home" size={24} color="black" />
      }} /> */}
      <Screen name="Mapa" component={MapaScreen} options={{
        title: "Mapa",
        tabBarIcon: ({color})=>
          <Feather name="map" size={24} color={color} />
      }} />
      <Screen name="ListaMotos" component={ListaMotosScreen} options={{
        title: "Motos",
        tabBarIcon: ({color})=>
          <Feather name="list" size={24} color={color} />
      }} />
      <Screen name="Notificacao" component={NotificacaoScreen} options={{
        title: "Notificações",
        tabBarIcon: ({color})=>
          <Ionicons name="notifications-outline" size={24} color={color} />
      }} />
      <Screen name="Config" component={ConfigScreen} options={{
        title: "Configurações",
        tabBarIcon: ({color})=>
          <Octicons name="gear" size={24} color={color} />
      }} />
    </Navigator>
  );
}