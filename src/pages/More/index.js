import React from "react";
import {View, Text} from "react-native";
import { useRoute } from "@react-navigation/native";

export function More(){

    const route = useRoute();
    const {code, codein, ask} = route.params;

    return(
        <View>
            <Text>{`${code}-${codein}`}</Text>
            <Text>{`${ask}`}</Text>
        </View>
    )
}