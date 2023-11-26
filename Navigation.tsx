import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

//screens
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import StackScreen from "./screens/StackScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{
        tabBarActiveTintColor: "#00726D"
    }}>
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({color, size}) => (<AntDesign name="home" size={24} color="black" />)
      }}/>
      <Tab.Screen name="Search" component={SearchScreen} 
      options={{
        tabBarLabel: "Search",
        tabBarIcon: ({color, size}) => (<FontAwesome name="search" size={24} color="black" />)
    }}/>
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
