import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, ScrollView, Button } from 'react-native';



import api from './src/api/api';
import Mais from './src/mais';
import Sobre from './src/sobre'




export default function App() {

  const [onapi, setApi] = useState([])


  useEffect(() => {
    async function apiAqui() {
      const armazenarApi = await api.get('https://economia.awesomeapi.com.br/json/USD-BRL')
      console.log(armazenarApi.data)
      setApi(armazenarApi.data)
    }
    apiAqui();
  }, [])

  return (

    <View >

      <StatusBar style='light' />
      <View style={styles.titulo}>
        <Text style={styles.titulodois}>Dolar Real</Text>


      </View>

      <FlatList
        data={onapi}
        renderItem={({ item }) => <Dados data={item} />}
      ></FlatList>

    </View>
  );

}



function Dados(props) {
  return (

    <View>

      <View style={styles.bloco}>
        <Text style={{ color: 'white', fontSize: 15, fontWeight: '700' }}>Dolar em tempo real!</Text>
        <Text style={styles.valor}> R$ {props.data.ask}</Text>
        <Text style={styles.descricao}>{props.data.name}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textobutton}>VER MAIS</Text>
        </TouchableOpacity>

      </View>

     
    </View>

  );


}


const styles = StyleSheet.create({
  titulo: {
    backgroundColor: 'blue',
    height: '20%',
    justifyContent: 'center',

  },
  titulodois: {
    color: 'white',
    fontSize: 20,
    marginLeft: '8%',
    marginTop: '5%',
    fontWeight: '900',
  },
  bloco: {
    width: '70%',
    height: 150,
    backgroundColor: 'black',
    marginTop: '15%',
    borderRadius: 10,
    padding: 10,
    marginLeft: '3%'
  },
  valor: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    padding: 5
  },
  descricao: {
    color: 'white',
    fontSize: 13,
    fontWeight: '500'

  },
  button: {
    backgroundColor: 'blue',
    width: '100%',
    height: '30%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  textobutton: {
    fontSize: 15,
    fontWeight: '700',
    color: 'white',

  }
})

