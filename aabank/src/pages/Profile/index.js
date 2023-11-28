import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from 'expo-image';


export default function Profile() {
    return (
        <LinearGradient
            colors={['#2c3e50', '#bdc3c7']}
            style={[{ padding: 15 }, styles.container]}>
            <View>
                <Header titulo="Perfil" />
            </View>
            <View style={styles.photoContainer}>
                <Image
                    style={styles.photo}
                    source="https://th.bing.com/th/id/OIG.R.0Fa7ioJbyedFzwaeIi?w=1024&h=1024&rs=1&pid=ImgDetMain"
                />
            </View>
            <View style={styles.dados}>
                <Text style={styles.texto}>Nome: Jane Doe</Text>
                <Text style={styles.texto}>Email: jane.doe@oxford.eua</Text>
                <Text style={styles.texto}>Telefone: (11) 99999-9999</Text>
                <Text style={styles.texto}>CPF: 123.456.789-10</Text>
                <Text style={styles.texto}>Data de Nascimento: 01/01/2000</Text>
                <Text style={styles.texto}>Endereço: Rua X, Número Y, Bairro Z, Cidade A, Estado B, CEP C</Text>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    photo: {
        width: 100,
        height: 100,
        marginTop: 30,
        alignSelf: "center",
        borderRadius: 100 / 2
    },
    dados: {
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30,
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderWidth: 1,
        borderColor: "#fff"
    },
    texto: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    }
});

