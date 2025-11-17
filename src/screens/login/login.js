import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles_login'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation()

  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Error, setErro] = useState('')

  function ValidateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {

      return true
    }
    else {
      return false
    }
  }

  function validInput() {
    if (!Email.trim() || !Password.trim()) {
      setErro('Preencha e-mail e senha para continuar')
      return
    }

    if (ValidateEmail()) {
      navigation.navigate('Tab')
      setErro('')
    }
    else {
      setErro('Digite um e-mail válido')
    }
  }

  return (
    <View style={styles.container}>
      
      <Image
        source={require('../../assets/login.png')}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        placeholder=" e-mail "
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(Text) => setEmail(Text)}
        value={Email}
      />

      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder=" senha "
        autoCapitalize="none"
        onChangeText={(Text) => setPassword(Text)}
        value={Password}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={validInput}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

      {Error ? <Text style={styles.errorText}>{Error}</Text> : null}

    </View>
  )
}

export default Login

