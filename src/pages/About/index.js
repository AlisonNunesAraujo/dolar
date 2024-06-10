import React from "react";
import {View, Text, StyleSheet} from "react-native";

export function About(){
    return(
        <View style={styles.View}>
            <Text style={styles.titulo}>Sobre o App</Text>
            <Text style={styles.texto}>Voçe pode ver valores convertidos em tempo real no App de varias moedas!</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    View:{
        width: '70%',
        height: 200,
        backgroundColor: '#121212',
        alignItems: 'center',
        marginTop: 40,
        marginLeft: '15%',
        borderRadius: 15,
    },
    titulo: {
        color:'white',
        fontWeight: '600',
        fontSize: 18,
    },
    texto:{
        color: 'white',
        marginTop: 20,
        fontSize: 14,
        padding: 5,

    }

})