import React from 'react'
import Splashscreen from './src/screens/Splashscreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Intro from './src/screens/Intro';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Home" component={Splashscreen} />
      <Stack.Screen name="Intro" component={Intro} />

      {/* <Stack.Screen name="Login" component={Splashscreen} /> */}

    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App