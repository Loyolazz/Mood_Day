import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles_login'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation()

  const [Email, setEmail] = useState()

  function ValidateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
      
      navigation.navigate('Tab')
    }
    alert("You have entered an invalid email address!")
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
      />
      <TouchableOpacity
        style={styles.button}
        onPress={ValidateEmail}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Login

