import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Modal } from 'react-native'
import styles from './styles_login'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { api } from '../../services/api';

const Login = () => {
  const navigation = useNavigation()
  const [hidePass, setHidePass] = useState(true);
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
        api.defaults.headers.common['Authorization'] = `Bearer ${Response.data.access_token}`
        //console.log(Response)
      })
    }

    catch (error) {
      console.log(error)
      setErro(true)
    }
  }


  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/login.png')}
          style={styles.logo}
        />
      </View>

      <View style={[styles.inputEmail, styles.inputArea]}>
        <TextInput
          placeholder=" e-mail "
          onChangeText={(Text) => setEmail(Text)}
          value={Email}
        />
      </View>

      <View style={[styles.inputPassword, styles.inputArea]}>

        <TextInput
          secureTextEntry={hidePass}
          placeholder=" senha "
          onChangeText={(Text) => setPassword(Text)}
          value={Password}
        />
        <TouchableOpacity
          onPress={() => setHidePass(!hidePass)}
        >
          <Icon style={{ right: 10 }} name={hidePass ? "eye" : 'eye-off'} color='#969696' size={20} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={validInput}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login