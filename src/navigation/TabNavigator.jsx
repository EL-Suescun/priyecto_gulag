import React from "react";
import { StatusBar, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ItemList from "../screens/ItemList";
import ShoppingCart from "../screens/ShoppingCart";
import Profile from "../screens/Profile";
import HelpSupport from "../screens/HelpSupport";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "../styles/TabNavigatorStyles";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#212f3d" />
      <Tab.Navigator
        screenOptions={{
          headerBackground: () => (
            <View style={styles.headerBackground} />
          ),
          headerBackgroundContainerStyle: styles.headerBackgroundContainerStyle,
          headerTitleStyle: styles.headerTitle,
          tabBarActiveTintColor: "#E5E8E8", // Color de ítem activo
          tabBarInactiveTintColor: "#AAB7B8", // Color de ítem inactivo
          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle, // Estilo para las etiquetas
          tabBarItemStyle: styles.tabBarItemStyle, // Estilo para el ítem
        }}
      >
        <Tab.Screen
          name="Home"
          component={ItemList}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Shopping Cart"
          component={ShoppingCart}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="shopping-cart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="account-circle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Help & Support"
          component={HelpSupport}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="help" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;
