import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles_login'
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';

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
      validApi()
    }
    else {
      console.log('aconteceu um erro')
    }
  }

  async function validApi() {
    try {
      await api.post('/oauth/token', {
        'grant_type': 'password',
        'email': Email,
        'password': Password,
        'client_id': '3mGWGtxIEKyhq_HGG4cq6hsTOd_zn1SuTD3_cafjUPc',
        'client_secret': '389JLi1Nd6DQ_soCI85C57ueTlMZ_JR7pRq6SJ0GaB0'
      }).then(Response => {
        navigation.navigate('Tab')
        console.log(Response)
      })
    }

    catch (error) {
      console.log(error)
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

