import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'

const Formulario = () => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function enviarFormulario() {
    console.warn(`Email: ${email} Senha: ${senha}`)
  }

  return (
    <View>
        <TextInput
            style = {{borderWidth: 1.0}}
            placeholder = 'Digite seu e-mail'
            value = {email}
            onChangeText = {email => setEmail(email)}
            inputMode = 'email'
        />
        <TextInput 
            style = {{borderWidth: 1.0}}
            placeholder = 'Digite sua senha'
            value = {senha}
            onChangeText = {senha => setSenha(senha)}
            secureTextEntry={true}
        />
        <Button
            title = 'Enviar o formulário'
            onPress = {enviarFormulario}
        />
    </View>
  )
}

export default Formulario