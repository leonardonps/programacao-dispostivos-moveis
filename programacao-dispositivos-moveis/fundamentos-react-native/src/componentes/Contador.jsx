import React, { useState } from 'react'
import {Button, Text} from 'react-native'

const Contador = ({passo = 1}) => {

  const [contador, setContador] = useState(0);
  const [imparOuPar, setImparOuPar] = useState();

  function definirImparOuPar () {
    if (contador % 2 === 0) {
        setImparOuPar('Par');
    } else {
        setImparOuPar('Ímpar')
    }
  }

  function incrementar() {
    setContador(contador + passo);
  }

  function decrementar() {
    setContador(contador - passo);
  }

  return (
    <>
        <Text>{contador}</Text>
        <Button title="+" onPress={incrementar}/>
        <Button title="-" onPress={decrementar}/>
        <Button title="Ímpar ou par?" onPress={definirImparOuPar} />
        <Text>{imparOuPar}</Text>
    </>
  )
}

export default Contador