import 'react-native-gesture-handler';
import  React from 'react'
import { StatusBar, LogBox} from 'react-native';
import Routes from './src/routes/routes';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/contexts/auth';
import { SafeAreaProvider } from 'react-native-safe-area-context';

LogBox.ignoreAllLogs();

export default function App() {
  return (

    <SafeAreaProvider >
      
    <NavigationContainer>
      <StatusBar backgroundColor="black"/>

      {/* dar acesso as rodas a toda a minha aplicacao */}
      <AuthProvider>

        <Routes />

      </AuthProvider>

    </NavigationContainer>

    </SafeAreaProvider>


  );
}

