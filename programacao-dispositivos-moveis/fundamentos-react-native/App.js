import React from "react";
import { View, StyleSheet } from "react-native";
import Primeiro from './src/componentes/Primeiro'
import PrimeiroProps from "./src/componentes/PrimeiroProps";
import Multi, {Comp2, Comp3} from "./src/componentes/Multi";
import Aleatorio from "./src/componentes/Aleatorio";
import MaxMin from "./src/componentes/MaxMin";
import gerarNumeroAleatorio from "./src/utils/GerarNumeroAleatorio";
import Contador from "./src/componentes/Contador";
import Formulario from "./src/componentes/Formulario";

export default () =>  {
        return (
            <View style={style.App}>
                {/* <Aleatorio min={7} max={99}/>
                <Aleatorio min={7} max={99}/>
                <Aleatorio min={7} max={99}/>
                <MaxMin n1={gerarNumeroAleatorio(1, 100)} n2={gerarNumeroAleatorio(1, 100)}/>
                <Multi/>
                <Comp2/>
                <Comp3/>
                <Primeiro/>
                <PrimeiroProps numero={10}/> 
                <Contador/>
                */}
                <Formulario/>
            </View>
        )
    
}

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
