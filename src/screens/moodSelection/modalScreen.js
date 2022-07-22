import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from './styles_MoodSelection';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native';

function MoodScreens({ navigation }) {
    return (
        <ScrollView>
            <View>
                <TouchableOpacity style={styles.CloseBottom}
                    onPress={() => navigation.goBack()}>
                    <Icons sytle={styles.BackIcon} name='clear'
                        size={20}
                        color='#697FFF' />
                </TouchableOpacity>
                <View style={styles.AllView}>
                    <View style={styles.TextView}>
                        <Text style={styles.TextHowAreYou}> Como você está? </Text>
                    </View>
                    <View style={styles.ViewDate}>
                        <Text> <Icons style={styles.IconStyle} name='calendar-today' /> HOJE, 23 DE JANEIRO  </Text>
                        <Text> <Icons style={styles.IconStyle} name='schedule' /> 08:35</Text>
                    </View>
                    <View style={styles.HumorPng}>
                        <Image style={styles.Humors} source={require('../../assets/humores/radiant.png')} />
                        <Image style={styles.Humors} source={require('../../assets/humores/happy.png')} />
                        <Image style={styles.Humors} source={require('../../assets/humores/ok.png')} />
                        <Image style={styles.Humors} source={require('../../assets/humores/sad.png')} />
                        <Image style={styles.Humors} source={require('../../assets/humores/terrible.png')} />
                    </View>
                    <View style={styles.HumorTxt}>
                        <Text style={styles.HumorsTxts}>RADIANTE</Text>
                        <Text style={styles.HumorsTxts}>FELIZ</Text>
                        <Text style={styles.HumorsTxts}>OK</Text>
                        <Text style={styles.HumorsTxts}>TRISTE</Text>
                        <Text style={styles.HumorsTxts}>ACABADO</Text>
                    </View>
                    <View style={styles.ActionDecision}>
                        <View style={styles.ActionIcons}>
                            <Icon style={styles.ActionIconStyle} name='bed' size={35} color='#000000' />
                            <Icon style={styles.ActionIconStyle} name='gratipay' size={37} color='#000000' />
                            <Icons style={styles.ActionIconStyle} name='theaters' size={37} color='#000000' />
                        </View>
                        <View style={styles.ActionText}>
                            <Text style={styles.ActionTextStyle}>descanso</Text>
                            <Text style={styles.ActionTextStyle}>encontro</Text>
                            <Text style={styles.ActionTextStyle}>filmes e séries</Text>
                        </View>
                        <View style={styles.ActionIcons}>
                            <Icon style={styles.ActionIconStyle} name='shopify' size={37} color='#000000' />
                            <Icons style={styles.ActionIconStyle} name='fastfood' size={37} color='#000000' />
                            <Icons style={styles.ActionIconStyle} name='celebration' size={37} color='#000000' />
                        </View>
                        <View style={styles.ActionText}>
                            <Text style={styles.ActionTextStyle}>compras</Text>
                            <Text style={styles.ActionTextStyle}>boa refeição</Text>
                            <Text style={styles.ActionTextStyle}>festa</Text>
                        </View>
                        <View style={styles.ActionIcons}>
                            <Icon style={styles.ActionIconStyle} name='futbol' size={37} color='#000000' />
                            <Icons style={styles.ActionIconStyle} name='restaurant-menu' size={37} color='#000000' />
                            <Icon style={styles.ActionIconStyle} name='dice-d20' size={37} color='#000000' />
                        </View>
                        <View style={styles.ActionText}>
                            <Text style={styles.ActionTextStyle}>esporte</Text>
                            <Text style={styles.ActionTextStyle}>cozinhar</Text>
                            <Text style={styles.ActionTextStyle}>jogos</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <TextInput style={styles.TextDay}></TextInput>
                </View>
                <View style={styles.SaveButtonLoc}>
                    <TouchableOpacity
                        style={styles.SaveButton}
                        onPress={() => this.props.navigation.navigate()}>
                        <Text style={styles.SaveButtonText}>SALVAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default MoodScreens