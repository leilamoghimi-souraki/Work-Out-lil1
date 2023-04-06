import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";

import WorkoutDetailScreen from "../screens/WorkoutDetailScreen";
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { ColorSchemeName } from "react-native";
import PersonalInfo from "../screens/PersonalInfo";

type DetailParams = {
  slug: string
}
export type RootStackParamList = {
  Root: undefined;
  Welcome: undefined;
  WorkoutDetail: DetailParams ;
  Home: undefined;
  Planner: undefined;
  Evaluation:undefined;
};

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      theme={colorScheme === "light" ? DefaultTheme : DarkTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WorkoutDetail"
        component={WorkoutDetailScreen}
      />
    </Stack.Navigator>
  );

}

const BottomTab = createBottomTabNavigator<RootStackParamList>();

function BottomTabNavigator() {
  return (

    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) =>
            <FontAwesome
              name="home"
              size={size}
              color={color}
            />
        }}
      />
      <BottomTab.Screen
        name="Planner"
        component={PlannerScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ color, size }) =>
            <Entypo
              name="add-to-list"
              size={size}
              color={color}
            />
        }}
      />
      <BottomTab.Screen
        name="Evaluation"
        component={PersonalInfo}
        options={{
          tabBarIcon: ({ color, size }) =>
            <FontAwesome
              name="calculator"
              size={size}
              color={color}
            />
        }}
      />
    </BottomTab.Navigator>
  );
}

