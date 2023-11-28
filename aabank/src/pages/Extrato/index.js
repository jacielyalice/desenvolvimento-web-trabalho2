import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Header from "../../components/Header";
import { LinearGradient } from 'expo-linear-gradient';

const list = [{
    id: 1,
    label: 'Boleto conta de luz',
    value: '460,22',
    date: '17/09/2023'
}]

export default function Extrato() {
    return (
        <LinearGradient
            colors={['#2c3e50', '#bdc3c7']}
            style={[{ padding: 15 }, styles.container]}>
            <View>
                <Header titulo="Extrato" />
                <Text>Testo Testo</Text>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});