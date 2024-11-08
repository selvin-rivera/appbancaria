import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Inicio } from '../Componentes/Inicio/Inicioapp';
import Transferencias from '../Componentes/Transferencias/Transferencias';
import Historico from '../Componentes/Historico/Historicoapp';

export default function NavBar() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Inicio">
        <Tab.Screen name='Inicio' component={Inicio} />
        <Tab.Screen name="Transferencias" component={Transferencias} />
        <Tab.Screen name="Histórico" component={Historico} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}