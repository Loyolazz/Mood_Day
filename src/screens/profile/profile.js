import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles_Profile';
import Login from '../login/login'

const email = ('FULANA@GMAIL.COM')
const Genero = ('FEMININO')
const DataDeAniver = ('19/12/1998')

const Profile = () => {
    return (
        <View style={styles.Profile}>
            <View style={styles.Padding}>
                <Image style={styles.ImagePerfil} source={require('../../assets/humores/radiant.png')} />
            </View>
            <Text style={styles.Hello}>Olá, Fulana</Text>
            <View style={styles.Aling}>
                <View style={styles.AlingData}>
                    <Text style={styles.InfoText}>E-MAIL: </Text>
                    <Text style={styles.DataInfo}>{email}</Text>
                </View>
                <View style={styles.AlingData}>
                    <Text style={styles.InfoText}>GÊNERO: </Text>
                    <Text style={styles.DataInfo}>{Genero}</Text>
                </View>
                <View style={styles.AlingData}>
                    <Text style={styles.InfoText}>DATA DE NASCIMENTO: </Text>
                    <Text style={styles.DataInfo}>{DataDeAniver}</Text>
                </View>
                <View style={styles.PerfilEdit}>
                </View>
            </View>
            <View style={styles.Padding}>
                <TouchableOpacity
                    style={styles.PerfilEditButton}
                    onPress={() => this.props.navigation.navigate()}>
                    <Text style={styles.PerfilEditButtonText}>EDITAR PERFIL</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Padding}>
                <TouchableOpacity
                    style={styles.PerfilExitButton}
                    onPress={() => this.props.navigation.navigate({Login})}>
                    <Text style={styles.PerfilExitButtonText}>SAIR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile