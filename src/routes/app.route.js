import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo, Feather,AntDesign } from '@expo/vector-icons';

import Home from '../screens/Home';
import Map from '../components/Map';
import Profile from '../screens/Profile'
import ProfileEdit from '../screens/ProfileEdit'
import AboutCompany from "../screens/AboutCompany"

const { Navigator, Screen } = createBottomTabNavigator();

export default function AppRoutes() {

  return (

    <Navigator screenOptions={{ headerShown: false }}
    >
      <Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: () => {
            return <Entypo name="home" size={30} color="black" />
          },
          tabBarBadge: 3
        }}

      />

      <Screen
        name="Procurar"
        component={Map}
        options={{
          tabBarIcon: () => {
            return <Feather name="map" size={30} color="black" />
          },
        }}
      />

      <Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: () => {
            return <AntDesign name="profile" size={30} color="black" />
          },
        }}
      />

    <Screen
        name="ProfileEdit"
        component={ProfileEdit}
        options={{ tabBarButton: () => null }}
      />

      
    <Screen
        name="AboutCompany"
        component={AboutCompany}
        options={{ tabBarButton: () => null }}
      />


    </Navigator>




  );
}