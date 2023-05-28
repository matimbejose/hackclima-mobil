import 'react-native-gesture-handler';
import  React from 'react'
import { StatusBar, LogBox} from 'react-native';
import Routes from './src/routes/routes';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/contexts/auth';

LogBox.ignoreAllLogs();

export default function App() {
  return (

    <NavigationContainer>
      <StatusBar backgroundColor="black"/>

      {/* dar acesso as rodas a toda a minha aplicacao */}
      <AuthProvider>

        <Routes />

      </AuthProvider>

    </NavigationContainer>


  );
}

