import { StyleSheet, Text, View} from "react-native";

export default function Profile() {
    return (
        <View style={StyleSheet.container}>
            <Text>pagina perfil</Text>
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#040316',
        alignItems:'center',
        justifyContent:'center',
    },
    
});

