import { Image } from 'expo-image';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;


export default function Home() {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#2c3e50', '#bdc3c7']}
                style={[{ padding: 15 }, styles.container]}>
                <View style={styles.photoContainer}>
                    <Image
                        style={styles.photo}
                        source="https://th.bing.com/th/id/OIG.R.0Fa7ioJbyedFzwaeIi?w=1024&h=1024&rs=1&pid=ImgDetMain"
                    />

                    <Text style={styles.logo}>AABank</Text>
                </View>
                <View style={styles.valueSaldo}>
                    <Text style={styles.saldoTexto}>saldo</Text>
                    <Text style={styles.saldoText}>R$ 1.234,35</Text>
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: statusBarHeight,
        flexDirection: 'column'
    },
    photoContainer: {
        flexDirection: 'row',
        paddingStart: 16
    },
    photo: {
        width: 50,
        height: 50,
        margin: 10,
        borderRadius: 44 / 2
    },
    valueSaldo: {
        paddingStart: 16,
        paddingTop: 20,
        borderBottomWidth: 2,
        borderBottomColor: "white"
    },
    saldoTexto: {
        color: "white",
        fontWeight: 'bold'
    },
    saldoText: {
        fontSize: 30,
        color: "#FFFF00",
        fontWeight: 'bold',
    },
    logo: {
        color: "white",
        paddingStart: "15%%",
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 20
    }
});