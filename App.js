import React from 'react';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const NestedStack = createStackNavigator();
const NestedNativeStack = createNativeStackNavigator();
const MaterialBottomTab = createMaterialBottomTabNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();



const TabNavigator = (props) => (
  <Tab.Navigator>
    <Tab.Screen name="Tab1" component={HomeScreen} />
    <Tab.Screen name="Tab2" component={HomeScreen} />
    <Tab.Screen name="Tab3" component={HomeScreen} />
  </Tab.Navigator>
);

const NestedNativeStackNavigator = (props) => (
  <NestedNativeStack.Navigator>
    <NestedNativeStack.Screen name="Screen" component={HomeScreen} />
  </NestedNativeStack.Navigator>
);

const NestedStackNavigator = (props) => (
  <NestedStack.Navigator>
    <NestedStack.Screen name="Screen" component={HomeScreen} />
  </NestedStack.Navigator>
);

const MaterialBottomNavigator = (props) => (
  <MaterialBottomTab.Navigator>
    <MaterialBottomTab.Screen name="Screen" component={HomeScreen} />
  </MaterialBottomTab.Navigator>
);

const MaterialTopTabNavigator = (props) => (
  <MaterialTopTab.Navigator>
    <MaterialTopTab.Screen name="Screen" component={HomeScreen} />
    <MaterialTopTab.Screen name="Screen 1" component={HomeScreen} />
  </MaterialTopTab.Navigator>
);

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTranslucent: true}}>
        <Stack.Screen name="Home1" component={HomeScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen
          name="NestedStackNavigator"
          component={NestedStackNavigator}
        />
        <Stack.Screen
          name="NestedNativeStackNavigator"
          component={NestedNativeStackNavigator}
        />
        <Stack.Screen
          name="MaterialBottomNavigator"
          component={MaterialBottomNavigator}
        />
        <Stack.Screen
          name="MaterialTopTabNavigator"
          component={MaterialTopTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
