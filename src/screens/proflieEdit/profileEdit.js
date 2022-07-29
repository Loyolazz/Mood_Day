import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, Image } from 'react-native';


const EditProfile = () => {
    return (
        <View style={styles.View}>
            <View style={styles.Profile}>
                <Image style={styles.ImagePerfil} source={require('../../assets/humores/happy.png')} />
                <View style={styles.Padding}>
                    <TouchableOpacity style={styles.PicChange}>
                        <Text style={styles.TextChange}>ALTERAR FOTO</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Aling}>
                    <Text style={styles.Info}>NOME</Text>
                    <TextInput style={styles.TextInput}> </TextInput>
                    <Text style={styles.Info}>E-MAIL</Text>
                    <TextInput style={styles.TextInput}> </TextInput>
                    <Text style={styles.Info}>GÊNERO</Text>
                    <TextInput style={styles.TextInput}> </TextInput>
                    <Text style={styles.Info}>DATA DE NASCIMENTO</Text>
                    <TextInput style={styles.TextInput}> </TextInput>
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

const styles = StyleSheet.create({
    View: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Profile: {
        flex: 1,
        alignItems: 'center',
    },
    ImagePerfil: {
        width: 100,
        height: 100,
        marginTop: 50,
        marginBottom: 20,
    },
    Padding: {
        paddingBottom: 20
    },
    PicChange: {
        borderRadius: 6,
        borderWidth: 2,
        backgroundColor: 'rgba(48, 79, 254, 0.14)',
        borderColor: 'rgba(48, 79, 254, 0.4)',
        width: 190,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextChange: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 15,
        fontWeight: '900',
        color: '#304ffe'
    },
    Aling: {
        marginEnd: 100,
        paddingLeft: 100,
        width: '100%',
    },
    AlingInfo: {
        flexDirection: 'row',
    },
    Info: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 15,
        fontWeight: '900',
        color: '#000000',

    },
    TextInput: {
        backgroundColor: '#FFFFFF',
        width: 300,
        borderColor: '#000000',
        borderWidth: 1,
        marginTop: 7,
        marginBottom: 7,
    },
    SaveButton:{
        backgroundColor: '#304FFE',
        borderRadius: 6,
        width: 305,
        height: 52,
        marginTop: 20,
        padding: 15,
    },
    SaveButtonText:{
        color: '#FFFFFF',
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: '900',
        fontSize: 15,
        lineHeight: 19,
        textAlign: 'center',
    }
})

export default EditProfile
