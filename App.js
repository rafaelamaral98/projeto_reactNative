import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Home, Produtos } from './pages'

const Stack = createStackNavigator();

export default function app() {
  return (
    <NavigationContainer initialRouteName='Login'>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name='Login' component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name='produtos' component={Produtos} options={{ title: 'Produtos' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}