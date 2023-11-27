import { StyleSheet, Text, View } from "react-native";

export default function Search(){
    return(
        <View style={Styles.container}>
            <Text>Pagina Buscar</Text>
        </View>
    );
}

const styles = StyleSheet. create({
    container:{
        flex:1,
        backgroundColor:"#040316",
        alignItems:'center',
        justifyContent:'center',
    },
});

