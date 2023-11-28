import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from "../../components/Header";
import { LinearGradient } from 'expo-linear-gradient';
import { string } from "prop-types";
import Movements from "../../components/Movements";


const list = [
    {
        id: 1,
        label: 'Boleto conta de luz',
        value: '460,22',
        date: '17/09/2023',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'Boleto conta de água',
        value: '75,00',
        date: '30/11/2023',
        type: 0 // despesas
    },
    {
        id: 3,
        label: 'Pix Cliente Alex',
        value: '3.000,00',
        date: '09/11/2023',
        type: 1 // receita / entradas
    },
    {
        id: 4,
        label: 'Salário',
        value: '10.000,00',
        date: '05/11/2023',
        type: 1 // receita / entradas
    },
]
export default function Extrato() {
    return (
        <LinearGradient
            colors={['#2c3e50', '#bdc3c7']}
            style={[{ padding: 15 }, styles.container]}>
            <View>
                <Header titulo="Extrato" />

                <Text style={styles.title}>Últimas movimentações</Text>

                <FlatList
                    style={styles.list}
                    data={list}
                    //keyExtractor={(item) => string(item.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <Movements data={item} />}
                />


            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14,
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    }
});