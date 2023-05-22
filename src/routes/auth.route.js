//ROTAS DE AUTETICACAO
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import Login from "../screens/Login/Index";
import TypeAccount from "../screens/TypeAccount/index"
import StudentType from "../screens/StudentType/index"
import CompanyType from "../screens/CompanyType";

const AuthStack = createStackNavigator();


export default function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }} />


            <AuthStack.Screen name="TypeAccount" component={TypeAccount} options={{

                headerStyle: {
                    backgroundColor: '#131313',
                },
                headerTintColor: '#FFF',
                headerBackTitleVisible: false,
                headerTitle: 'Voltar'
            }}
            />

            <AuthStack.Screen name="StudentType" component={StudentType}
                options={{

                    headerStyle: {
                        backgroundColor: '#131313',
                    },
                    headerTintColor: '#FFF',
                    headerBackTitleVisible: false,
                    headerTitle: 'Voltar'
                }} 
                
                />


            <AuthStack.Screen name="CompanyType" component={CompanyType}
                options={{

                    headerStyle: {
                        backgroundColor: '#131313',
                    },
                    headerTintColor: '#FFF',
                    headerBackTitleVisible: false,
                    headerTitle: 'Voltar'
                }} 
                
                />
        </AuthStack.Navigator>

    )
}