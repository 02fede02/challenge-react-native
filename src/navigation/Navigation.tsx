import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, List, Tasks} from '../screens';
import {RootStackParamList} from '../interfaces';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigation(): React.JSX.Element {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Tasks" component={Tasks} />
      <Stack.Screen name="List" component={List} />
    </Stack.Navigator>
  );
}

export default Navigation;
