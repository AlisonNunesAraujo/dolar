import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { Dados } from "../../components/Dados";

import api from "../../api/api";

export function Home() {
  const [onapi, setApi] = useState([]);

  useEffect(() => {
    async function apiAqui() {
      const armazenarApi = await api.get(
        "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL,XRP-BRL,LTC-BRL,JPY-BRL,GBP-BRL,CHF-BRL,AUD-BRL,CAD-BRL,CNY-BRL"
      );
      // convertendo o objeto em array
      const apiData = Object.keys(armazenarApi.data).map((key) => {
        return armazenarApi.data[key];
      });
      setApi(apiData);
    }
    apiAqui();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.listContent} style={styles.list} >
        {onapi.map((item) => (
          <Dados data={item} key={`${item.code}/${item.codein}`} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  list: {
    flex: 1,
    width: "100%",
  },
  listContent: {
    marginHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 80,
  },
});
