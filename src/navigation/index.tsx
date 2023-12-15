import * as React from "react";
import { ColorSchemeName, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useUserInfo } from "../lib/userContext";
import Colors from "../constants/Colors";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EmployeeScreen from "../screens/EmployeeScreen";
import RequestScreen from "../screens/RequestScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import {
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import LogoutButton from "../components/LogoutButton.tsx";
import AuthForm from "../screens/AuthScreen";
import { ProfileEmployeeScreen } from "../screens/ProfileEmployeeScreen";


const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...Colors.dark,
  },
};

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...Colors.light,
  },
};

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? darkTheme : lightTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { session } = useUserInfo();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={session ? BottomTabNavigator : AuthForm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Employee"
        component={EmployeeScreen}
        options={{
          title: "Employees",
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: "Poppins_700Bold",
            color: "#00726D",
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Request"
        component={RequestScreen}
        options={{
          title: "Solicitud",
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: "Poppins_700Bold",
            color: "#00726D",
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="ProfileEmployee"
        component={ProfileEmployeeScreen}
        options={{
          title: "Perfil",
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: "Poppins_700Bold",
            color: "#00726D",
          },
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#ffff",
        headerShadowVisible: false,
        tabBarStyle: { backgroundColor: "#00726D", height: 53 },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerTitleStyle: {
            fontFamily: "Poppins_700Bold",
            fontSize: 20,
            color: "#00726D",
          },
          headerTitleAlign: "center",
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            fontFamily: "Poppins_400Regular",
            fontSize: 12,
          },
          headerRight: () => (
            <LogoutButton/>
          ),
        })}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }: RootTabScreenProps<"Profile">) => ({
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
          headerTitleStyle: {
            fontFamily: "Poppins_700Bold",
            fontSize: 20,
            color: "#00726D",
          },
          headerTitleAlign: "center",
          tabBarLabel: "Profile",
          tabBarLabelStyle: {
            fontFamily: "Poppins_400Regular",
            fontSize: 12,
          },
          headerRight: () => (
            <LogoutButton/>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: 0 }} {...props} />;
}
