// import { View, Text } from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {SafeAreaProvider} from 'react-native-safe-area-context';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// function App() {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={HomeScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }

// export default App;

import React from 'react';
import { AppNavigator } from './src/navigation';

const App = () => {
  return (
    <>
      <AppNavigator />
    </>
  );
};
export default App;