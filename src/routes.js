///import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./screens/Login/Index";

const Stack = createStackNavigator()


export default function Routes() {
    return (
        <NavigationContainer>

            <Stack.Navigator>

                <Stack.Screen name="Login" component={Login}  options={{headerShown:false}} />
        
            </Stack.Navigator>


        </NavigationContainer>
    )

}