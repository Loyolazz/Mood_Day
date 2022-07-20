import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles_login'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Image
          source={require('../../assets/login.png')}
          style={styles.logo}
        />

        <TextInput
          style={styles.input}
          placeholder=" e-mail "
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder=" senha "
        />
        <TouchableOpacity 
        style={styles.button} 
        onPress={() => this.props.navigation.navigate('Tab')}>
        <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>

      </View>
    )
}
}

