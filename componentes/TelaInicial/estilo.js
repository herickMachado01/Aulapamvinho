import { StyleSheet } from "react-native";

const  estilo = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems: 'center',
        padding: 20
    },
    titulo:{
        color:'#fff',
        fontSize:26,
        fontWeight:'bold',
        marginBottom:10,
    },
    subtitulo:{
        color:'#fff',
        fontSize:18,
         textAlign:'center'
    }
});

export default estilo;