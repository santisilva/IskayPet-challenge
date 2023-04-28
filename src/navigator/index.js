import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home, Store, Map} from '@views';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Store" component={Store} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
