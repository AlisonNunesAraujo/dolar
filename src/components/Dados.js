import { Text, TouchableOpacity, View, StyleSheet, Modal,StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import Detalhes from "../Detalhes";




export function Dados(props) {

  const [Modalvisible, setModal] = useState(false)

 function verMais(){
  setModal(true)
 }

 function fechar(){
  setModal(false)
 }

 

  return (
    <View style={styles.bloco}>
      <Text style={{ color: "white", fontSize: 15, fontWeight: "700" }}>
        Valor em tempo real!
      </Text>
      <Text style={styles.valor}> R$ {props.data.ask}</Text>
      <Text style={styles.descricao}>{props.data.name}</Text>
      <TouchableOpacity style={styles.button} onPress={verMais}>
        <Text style={styles.textobutton}>VER MAIS</Text>
      </TouchableOpacity>

      <Modal animationType='slide' visible={Modalvisible}>
        <Detalhes fechar={fechar}/>
      </Modal>

    </View>
  );
}



const styles = StyleSheet.create({
  bloco: {
    width: "100%",
    backgroundColor: "black",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
   
  },
  valor: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
    padding: 5,
  },
  descricao: {
    color: "white",
    fontSize: 13,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "blue",
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    paddingVertical: 10
  },
  textobutton: {
    fontSize: 15,
    fontWeight: "700",
    color: "white",
  },
});
