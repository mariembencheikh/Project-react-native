import { createStackNavigator } from '@react-navigation/stack';
import Acceuil from '../Screens/Acceuil';
import Guess from '../Screens/Guess';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
const Stack = createStackNavigator();


function StackNav() {
    return (
        
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Acceuil} options={{ headerShown: false }} />
          <Stack.Screen name="Guess" component={Guess}  options={{ headerShown: true }}/>
        </Stack.Navigator>
      </NavigationContainer>
        
    );
}
export default StackNav;