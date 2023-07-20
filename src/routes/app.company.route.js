import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native';


import HomeCompany from '../screens/HomeCompany';
import ViewCompany from '../screens/ViewCompany';
import PymentCompany from '../screens/PymentCompany';
import CallCompany from '../screens/CallCompany';


const AuthStack = createStackNavigator();

export default function AppRoutesCompany() {
  const navigation = useNavigation();


  return (
    <AuthStack.Navigator>

    <AuthStack.Screen name="HomeCompany" component={HomeCompany}  options={{ headerShown: false }} />

    <AuthStack.Screen name="ViewCompany" component={ViewCompany}
              options={{

                headerStyle: {
                    backgroundColor: '#FFF',
                    borderWidth: 1,
                },
                headerTintColor: '#194666',
                headerBackTitleVisible: false,
                headerTitle: 'Voltar'
            }} 
            
                
      />

      
    <AuthStack.Screen name="PymentCompany" component={PymentCompany}
                options={{

                    headerStyle: {
                        backgroundColor: '#FFF',
                        borderWidth: 1,
                    },
                    headerTintColor: '#194666',
                    headerBackTitleVisible: false,
                    headerTitle: 'Voltar'
                }} 
                
      />

<AuthStack.Screen name="CallCompany" component={CallCompany}
              options={{

                headerStyle: {
                    backgroundColor: '#FFF',
                    borderWidth: 1,
                },
                headerTintColor: '#194666',
                headerBackTitleVisible: false,
                headerTitle: 'Voltar'
            }} 
            
                
      />


  
</AuthStack.Navigator>




  );
}