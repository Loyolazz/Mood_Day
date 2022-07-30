import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";
import { icon } from "./icons";
import styles from "./styles_profEdit";

const EditProfile = () => {
    const navigation = useNavigation
    const [visible, setVisible] = useState(false)
    return (
        <View style={styles.View}>
            <View style={styles.Profile}>
                <Image style={styles.ImagePerfil} source={require('../../assets/humores/happy.png')} />
                <View style={styles.Padding}>
                    <TouchableOpacity style={styles.PicChange} onPress={() => setVisible(true)}>
                        <Text style={styles.TextChange}>ALTERAR FOTO</Text>
                    </TouchableOpacity>
                </View>

                <Modal visible={visible} animationType='slide'>
                    <View>
                        <TouchableOpacity onPress={() => setVisible(false)} style={styles.BackBottom}>
                            <Icon name='close' size={30} color='blue' />
                        </TouchableOpacity>
                        <Text style={styles.Select}> Selecione a foto de perfil</Text>
                        <View>
                            <View style={styles.Alinha}>
                                {icon.map((item, index) => (
                                    <View key={index} >
                                        <TouchableOpacity>
                                        <Image style={styles.ImagePerfil2} source={item} />
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </View>
                        </View>
                        <View styles={styles.Organiz}>
                            <TouchableOpacity
                                style={styles.SaveButton2}
                                onPress={() => setVisible(false)} >
                                <Text style={styles.SaveButtonText2}>SALVAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <View style={styles.Aling}>
                    <Text style={styles.Info} >NOME</Text>
                    <TextInput style={styles.TextInput} placeholder='HOME'> </TextInput>
                    <Text style={styles.Info}>E-MAIL</Text>
                    <TextInput style={styles.TextInput} placeholder='E-MAIL'> </TextInput>
                    <Text style={styles.Info}>GÊNERO</Text>
                    <TouchableOpacity style={styles.BottonGender}>
                        <Text style={styles.Gender}> SELECIONE SEU GÊNERO:</Text>
                        <Icon style={styles.expand} name='expand-more' size={35} />
                    </TouchableOpacity>
                    <Text style={styles.Info}>DATA DE NASCIMENTO</Text>
                    <TextInput style={styles.TextInput} placeholder='DATA DE NASCIMENTO'> </TextInput>
                </View>
                <View style={styles.Padding}>
                    <TouchableOpacity style={styles.SaveButton}>
                        <Text style={styles.SaveButtonText}>SALVAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}



export default EditProfile
