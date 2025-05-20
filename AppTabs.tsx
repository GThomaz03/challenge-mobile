import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import MapaScreen from './screens/MapaScreen';
import NotificacaoScreen from './screens/NotificacaoScreen';
import ConfigScreen from './screens/ConfigScreen';
import ListaMotosScreen from './screens/ListaMotosScreen';
import {Feather, Ionicons, Octicons } from '@expo/vector-icons';

const {Navigator, Screen} = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Navigator screenOptions={{
      headerShown: false, 
      tabBarStyle:{
        backgroundColor: "#2c2c2c",
        borderWidth: 0,
        },
      animation: 'shift'
        }} >
      <Screen name="Home" component={HomeScreen} options={{
        title: "Home",
        tabBarIcon: ()=>
          <Feather name="home" size={24} color="black" />
      }} />
      <Screen name="Mapa" component={MapaScreen} options={{
        title: "Mapa",
        tabBarIcon: ()=>
          <Feather name="map" size={24} color="black" />
      }} />
      <Screen name="ListaMotos" component={ListaMotosScreen} options={{
        title: "Motos",
        tabBarIcon: ()=>
          <Feather name="list" size={24} color="black" />
      }} />
      <Screen name="Notificacao" component={NotificacaoScreen} options={{
        title: "Notificações",
        tabBarIcon: ()=>
          <Ionicons name="notifications-outline" size={24} color="black" />
      }} />
      <Screen name="Config" component={ConfigScreen} options={{
        title: "Configurações",
        tabBarIcon: ()=>
          <Octicons name="gear" size={24} color="black" />
      }} />
    </Navigator>
  );
}