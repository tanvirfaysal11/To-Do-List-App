import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddTaskScreen from '../screens/AddTaskScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#4f46e5' }, headerTintColor: '#fff' }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'To-Do List' }} />
      <Stack.Screen name="AddTask" component={AddTaskScreen} options={{ title: 'Add Task' }} />
    </Stack.Navigator>
  );
}
