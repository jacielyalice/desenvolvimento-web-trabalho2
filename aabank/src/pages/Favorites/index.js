import { StyleSheet, Text, View } from "react-native";

export default function favorites(){
    return(
        <View style={styles.container}>
        <Text>paginas salvos</Text>
        </View>
);

}

const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:'#040316',
        alignItems:'center',
        justifyContent:'center',
    },
});
