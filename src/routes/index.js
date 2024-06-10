import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons'


import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { ImageBackground } from 'react-native';

export function Routes() {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>

      <Tab.Screen name="Home" 
      component={Home} 
      options={{
        tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size}/>
      }} 
     ></Tab.Screen>

      <Tab.Screen name="About" component={About}
      options={{
        tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size} />
      }} 
      ></Tab.Screen> 
      
      


    </Tab.Navigator>
  )
}

