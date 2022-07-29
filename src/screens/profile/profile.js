import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import styles from './styles_Profile';
import EditProfile from '../proflieEdit/profileEdit';
import { useNavigation } from '@react-navigation/native';

const email = ('FULANA@GMAIL.COM')
const Genero = ('FEMININO')
const DataDeAniver = ('19/12/1998')


const Profile = () => {
    const navigation = useNavigation()
    const [modalActive, setModalAcitve] = useState(false)
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
                <TouchableOpacity style={styles.PerfilEditButton} onPress={() => navigation.navigate('EditProfile')}>
                    <Text style={styles.PerfilEditButtonText}>EDITAR PERFIL</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Padding}>
                <TouchableOpacity style={styles.PerfilExitButton} onPress={() => setModalAcitve(true)}>
                    <Text style={styles.PerfilExitButtonText}>SAIR</Text>
                </TouchableOpacity>

                <Modal animationType='fade' transparent={true} visible={modalActive}>
                    <View style={styles.ModalStyleTwo} >
                        <View style={styles.ModalContainer}>
                            <View style={styles.ModalTop}>
                                <Text style={styles.Atteion}>Atenção</Text>
                                <Text style={styles.Exit}>Deseja mesmo sair?</Text>
                            </View>
                            <View style={styles.ViewModalBotton}>
                                <TouchableOpacity onPress={() => setModalAcitve(false)}>
                                    <Text style={styles.CanYes}>CANCELAR</Text></TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                    <Text style={styles.CanYes}>SIM</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}


export default Profile