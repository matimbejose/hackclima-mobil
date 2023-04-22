import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center'
    }, 
    logo: {
        width: 237,
        height: 250,
        marginTop: 47,
        marginLeft: 2
    }, 
    input: {
        height:70,
        width:350,
        marginTop:30,
        borderRadius: 50,
        borderWidth: 1,
        backgroundColor: '#FFF',
        padding: 20
    },
    botaoEntrar: {
        backgroundColor: '#FF0000',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 50,
        height: 60,
        justifyContent:'center',
        width: 350
    },
    formulario: {
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    ultimoTexto: {
        flexDirection: 'row',
        marginTop: 10
    }


})