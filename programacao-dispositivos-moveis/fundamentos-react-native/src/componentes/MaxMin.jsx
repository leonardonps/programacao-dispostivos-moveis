import React from "react";
import { Text } from "react-native";
import Estilos from "../estilos";

export default ({n1, n2}) => {

    let maior, menor;
    let igual = false;

    if(n1 > n2){
        maior = n1;
        menor = n2;
    } else if (n2 > n1){
        maior = n2;
        menor = n1;
    } else{
        igual = true;
    }


    if(igual){
        return(
            <>
            <Text style={Estilos.text}> Números gerados: {n1} e {n2}</Text>
            <Text style={Estilos.text}>Valores {n1} e {n2} são iguais</Text>
            </>
        )
    } else{
        return(
            <>
            <Text style={Estilos.text}> Números gerados: {n1} e {n2}</Text>
            <Text style={Estilos.text}>Valor {maior} é maior que o valor {menor}</Text>
            </>
        )
    }
}