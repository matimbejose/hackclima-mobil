import  React from 'react'
import { StatusBar, LogBox} from 'react-native';
import 'react-native-gesture-handler';
import Routes from './src/routes/routes';
import { NavigationContainer } from '@react-navigation/native';

LogBox.ignoreAllLogs();

export default function App() {
  return (

    <NavigationContainer>
      <StatusBar backgroundColor="black"/>

        <Routes />

    </NavigationContainer>


  );
}

