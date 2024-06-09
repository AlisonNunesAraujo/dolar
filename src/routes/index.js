import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { More } from '../pages/More';

export function Routes() {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: true,
        tabBarStyle: {
          marginTop: 0,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{title: 'Dólar'}}/>
      <Tab.Screen name="About" component={About} options={{title: 'Sobre'}}/>
    </Tab.Navigator>
  )
}

function HomeStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeStack" component={Home} />
      <Stack.Screen name="More" component={More} />
    </Stack.Navigator>
  );
}