import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Home from "./pages/Home";
import Extrato from "./pages/Extrato";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import BarCode from "./pages/BarCode";

import ButtonNew from "./components/ButtonNew";

import { Entypo, Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#121212",
                    borderTopColor: "transparent",
                },
                tabBarActiveTintColor: "#FFF",
                headerShown: false
            }}
        >
            <Tab.Screen
                name="Inicio"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="Procurar"
                component={Search}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="search" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="BarCode"
                component={BarCode}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ size, focused }) => (
                        <ButtonNew size={size} focused={focused} />
                    )
                }}
            />

            <Tab.Screen
                name="Extrato"
                component={Extrato}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="notification" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="Perfil"
                component={Profile}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user" size={size} color={color} />
                    )
                }}
            />

        </Tab.Navigator>
    )
}