import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './src/components1/components/MyDrawer';


export default function App() {




  return (
   
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>

  );
}












// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
