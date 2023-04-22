import { StyleSheet,SafeAreaView, StatusBar, Platform } from 'react-native';
import Routes from './src/routes';



export default function App() {
  return (

    <SafeAreaView style={styles.container}>

      <StatusBar backgroundColor="black"/>

        <Routes />


    </SafeAreaView>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }


});
