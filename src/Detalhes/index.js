import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Detalhes(props){
    return(
        <View style={styles.bloco}>
           
            <Text style={styles.titulo}>Moedas</Text>
            <Text style={styles.texto}>Todas as moedas são atualizadas a cada 30 segudos!</Text>

            <TouchableOpacity onPress={props.fechar} style={styles.button}>
                <Text style={styles.textobutton}>FECHAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    bloco:{
        backgroundColor: '#202020',
        height: 250,
        borderRadius: 10,
        margin: 10,

    },
    titulo:{
        color: 'white',
        fontSize: 15,
        fontWeight: '700',
        marginLeft: 5,
    },
    texto:{
        color: 'white',
        marginLeft: 5,
        fontSize: 14,
        fontWeight: '500',
        margin: 5,
    },
    button:{
        backgroundColor: 'blue',
        width: '95%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
        borderRadius: 5,
        marginLeft: 10,
    },
    textobutton:{
        color: 'white',
        fontSize: 15,
        fontWeight: '900'
    }
})

