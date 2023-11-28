import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Entypo } from "@expo/vector-icons";

export default function ButtonNew({ size, focused }) {
    return (
        <View style={[styles.container, { backgroundColor: focused ? '#3eccf5' : "#6fdfff" }]}>
            <Entypo name="plus" size={size} color={focused ? "#FFF" : "#f8f8f8"} />
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