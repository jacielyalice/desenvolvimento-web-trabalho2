import React from "react";
import {
    View,
    StyleSheet,
    Text,
    StatusBar
} from "react-native"
import { Feather, AntDesign } from '@expo/vector-icons';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ titulo }) {
    return (
        <View style={styles.container}>
            <View style={[styles.iconback, { alignSelf: "flex-start" }]}>
                <AntDesign name="left" size={24} color="white" />
            </View>
            <View style={{ alignSelf: "center" }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>{titulo}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: statusBarHeight,
        flexDirection: "column",
    },
    iconback: {
        width: 30,
        height: 30,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#a19d9d"
    }
})