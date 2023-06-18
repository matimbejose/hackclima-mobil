import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo,Feather  } from '@expo/vector-icons'; 

import Home from '../screens/Home';
import Map from '../components/Map';



const { Navigator, Screen} =  createBottomTabNavigator();

export default function AppRoutes() {

  return (

      <Navigator>
        <Screen 
        name="Inicio" 
        component={Home} 
        options={{
          tabBarIcon: () => {
            return <Entypo name="home" size={30} color="black" />
          },
          headerShow:  false
        }}
        />

        <Screen 
        name="Procurar" 
        component={Map}
        options={{
          tabBarIcon: () => {
            return <Feather name="map" size={30} color="black" />
          },
          headerShow:  false
        }}
        />

      </Navigator>




  );
}