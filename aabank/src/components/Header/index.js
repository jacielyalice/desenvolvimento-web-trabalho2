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
            <View style={styles.iconback}>
                <AntDesign name="arrowleft" size={24} color="white" />
            </View>
            <View>
                <Text>{titulo}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: statusBarHeight,
    },
    iconback: {
        width: 30,
        height: 30,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        backgroundColor: "#a19d9d"
    }
})