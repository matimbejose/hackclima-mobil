import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import AboutCompany from '../screens/AboutCompany';



export default function AppRoutes() {


  const Tab = createMaterialBottomTabNavigator();


  return (

    <View>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="AboutCompany" component={AboutCompany} />
      </Tab.Navigator>
    </View>




  );
}