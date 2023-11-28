import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function ButtonNew({ size, focused }) {
    return (
        <View style={[styles.container, { backgroundColor: focused ? '#ffff00' : "#b4b54b" }]}>
            <AntDesign name="plus" size={size} color={focused ? "black" : "gray"} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    }
})