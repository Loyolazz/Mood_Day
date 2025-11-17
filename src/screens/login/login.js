import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles_login'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation()

  const [Email, setEmail] = useState()
  const [Password, setPassword] = useState()
  const [Error, setErro] = useState(false)

  function ValidateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {

      return true
    }
    else {
      return false
    }
  }

  function validInput() {
    if (ValidateEmail()) {
      navigation.navigate('Tab')
      setErro(false)
    }
    else {
      console.log('aconteceu um erro')
      setErro(true)
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
        onChangeText={(Text) => setEmail(Text)}
        value={Email}
      />

      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder=" senha "
        onChangeText={(Text) => setPassword(Text)}
        value={Password}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={validInput}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default Login

