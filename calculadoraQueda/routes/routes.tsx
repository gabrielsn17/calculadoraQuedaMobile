import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home/home';
import Info from '../pages/Info/info';
import Objects from '../pages/Objects/objects';
import Result from '../pages/Result/result';
import Personalize from '../pages/Personalize/personalize';
import PersonalizeData from '../pages/ResultPersonalized/resultPersonalized';

const Stack = createStackNavigator();

function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Objects" component={Objects} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="Personalize" component={Personalize} />
        <Stack.Screen name="PersonalizeData" component={PersonalizeData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Rotas;