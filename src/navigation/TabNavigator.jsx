import React from "react";
import { StatusBar, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Usuario from "../screens/Usuario";
import Opciones from "../screens/Opciones";
import ShoppingCart from '../screens/ShoppingCart'
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#212f3d" />
      <Tab.Navigator
        screenOptions={{
          headerBackground: () => (
            <View style={{ flex: 1, backgroundColor: '#212f3d' }} />
          ),
          headerBackgroundContainerStyle: {
            backgroundColor: "#212f3d",
          },
          headerTitleStyle: {
            color: "white",
            fontSize: 22,
            fontWeight: "bold",
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { backgroundColor: "#212f3d" },
        }}
      >
        <Tab.Screen
          name="David"
          component={Usuario}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Inicio"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Opciones"
          component={Opciones}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="settings" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ShoppingCart"
          component={ShoppingCart}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="ShoppingCart" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;
