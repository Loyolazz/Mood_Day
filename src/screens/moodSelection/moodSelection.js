import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from './styles_MoodSelection';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native';
import { emoji } from './emojis';
import { api } from '../../services/api';

const MoodScreens = () => {
    const [id, setId] = useState(0)
    const [moods, setMoods] = useState('')
    const humorActive = (key, id) => {
        if (key === id) {
            setId(null)
        }
        else {
            setMoods(emoji[key].type)
            setId(key)
        }
    }

    const [Dscrpt, setDscrpt] = useState('')
    const [click, setClick] = useState(false)
    const [arrayAction, setArrayAction] = useState([])
    const clickActionAtive = (key) => {
        setClick(true)
        if (arrayAction.indexOf(key) !== -1) {
            setArrayAction(arrayAction.filter(item => item !== key))
        }
        else if (arrayAction.length < 3) {
            setArrayAction([...arrayAction, key])
        }
    }

    const dailyEntry = async () => {
        try {
            await api.post('/daily_entries', {
                "daily_entry": {
                    "mood": moods,
                    "activity_ids": arrayAction,
                    "description": Dscrpt
                }
            },{ 
                headers:{
                Authorization:`Bearer vdcWUER8mqkRQ9Jqk3wVaMY7Lz5p4iblnpXDoYk8SZY`
                }
            })
        } catch (error) {
            console.log(Dscrpt, arrayAction, moods, error)
        }
    }


    return (
        <View style={styles.SafeView}>
            <ScrollView>
                <TouchableOpacity style={styles.CloseBottom}
                    onPress={() => navigation.goBack()}>
                    <Icons sytle={styles.BackIcon} name='clear'
                        size={20}
                        color='#697FFF' />
                </TouchableOpacity>
                <View style={styles.AllView}>
                    <View style={styles.TextView}>
                        <Text style={styles.TextHowAreYou}> Como voc?? est??? </Text>
                    </View>
                    <View style={styles.ViewDate}>
                        <Text> <Icons style={styles.IconStyle} name='calendar-today' /> HOJE, 23 DE JANEIRO  </Text>
                        <Text> <Icons style={styles.IconStyle} name='schedule' /> 08:35</Text>
                    </View>
                    <View style={styles.HumorSelect}>
                        {emoji.map((item, index) => (
                            <View style={styles.HumorStyle} key={index}>
                                <TouchableOpacity onPress={() => humorActive(index, id)} style={[styles.Align, { backgroundColor: id === index ? '#304ffe' : '#FFFF' }]}>
                                    <Image style={styles.Humors} source={item.image} />
                                </TouchableOpacity>
                                <Text style={[styles.HumorsTxts, { color: id === index ? item.color : null }]}>{item.name}</Text>
                            </View>
                        ))}
                    </View>
                    <View>
                        <View style={styles.ActionDecision}>
                            <View style={styles.ActionIconTextStyle}>
                                <View>
                                    <TouchableOpacity onPress={() => clickActionAtive(0)} style={[styles.iconsAlign, { backgroundColor: click && arrayAction.indexOf(0) !== -1 ? '#304ffe' : 'white' }]}>
                                        <Icons style={styles.ActionIconStyle} name='king-bed' size={38} color='#000000' />
                                    </TouchableOpacity>
                                    <Text style={styles.ActionTextStyle}>  descanso</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => clickActionAtive(1)} style={[styles.iconsAlign, { backgroundColor: click && arrayAction.indexOf(1) !== -1 ? '#304ffe' : 'white' }]}>
                                        <Icon style={styles.ActionIconStyle} name='gratipay' size={38} color='#000000' />
                                    </TouchableOpacity>
                                    <Text style={styles.ActionTextStyle}>   encontro</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => clickActionAtive(2)} style={[styles.iconsAlign, { backgroundColor: click && arrayAction.indexOf(2) !== -1 ? '#304ffe' : 'white' }]}>
                                        <Icons style={styles.ActionIconStyle} name='theaters' size={38} color='#000000' />
                                    </TouchableOpacity>
                                    <Text style={styles.ActionTextStyle}>filmes e s??ries</Text>
                                </View>
                            </View>
                            <View style={styles.ActionIconTextStyle}>
                                <View>
                                    <TouchableOpacity onPress={() => clickActionAtive(3)} style={[styles.iconsAlign, { backgroundColor: click && arrayAction.indexOf(3) !== -1 ? '#304ffe' : 'white' }]}>
                                        <Icon style={styles.ActionIconStyle} name='shopify' size={38} color='#000000' />
                                    </TouchableOpacity>
                                    <Text style={styles.ActionTextStyle}>   compras</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => clickActionAtive(4)} style={[styles.iconsAlign, { backgroundColor: click && arrayAction.indexOf(4) !== -1 ? '#304ffe' : 'white' }]}>
                                        <Icons style={styles.ActionIconStyle} name='fastfood' size={38} color='#000000' />
                                    </TouchableOpacity>
                                    <Text style={styles.ActionTextStyle}>boa refei????o</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => clickActionAtive(5)} style={[styles.iconsAlign, { backgroundColor: click && arrayAction.indexOf(5) !== -1 ? '#304ffe' : 'white' }]}>
                                        <Icons style={styles.ActionIconStyle} name='celebration' size={38} color='#000000' />
                                    </TouchableOpacity>
                                    <Text style={styles.ActionTextStyle}>      festa</Text>
                                </View>
                            </View>
                            <View style={styles.ActionIconTextStyle}>
                                <View>
                                    <TouchableOpacity onPress={() => clickActionAtive(6)} style={[styles.iconsAlign, { backgroundColor: click && arrayAction.indexOf(6) !== -1 ? '#304ffe' : 'white' }]}>
                                        <Icon style={styles.ActionIconStyle} name='futbol' size={38} color='#000000' />
                                    </TouchableOpacity>
                                    <Text style={styles.ActionTextStyle}>     esporte</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => clickActionAtive(7)} style={[styles.iconsAlign, { backgroundColor: click && arrayAction.indexOf(7) !== -1 ? '#304ffe' : 'white' }]}>
                                        <Icons style={styles.ActionIconStyle} name='restaurant-menu' size={38} color='#000000' />
                                    </TouchableOpacity>
                                    <Text style={styles.ActionTextStyle}>   cozinhar</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => clickActionAtive(8)} style={[styles.iconsAlign, { backgroundColor: click && arrayAction.indexOf(8) !== -1 ? '#304ffe' : 'white' }]}>
                                        <Icon style={styles.ActionIconStyle} name='dice-d20' size={39} color='#000000' />
                                    </TouchableOpacity>
                                    <Text style={styles.ActionTextStyle}>      jogos</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.TextDay}>
                    <TextInput style={styles.TextDayStyle}
                        placeholder='Escreva aqui o que aconteceu...'
                        onChangeText={(AconteceuHoje) => setDscrpt(AconteceuHoje)}
                    ></TextInput>
                </View>
                <View style={styles.SaveButtonLoc}>
                    <TouchableOpacity
                        style={styles.SaveButton}
                        onPress={() => dailyEntry()}>
                        <Text style={styles.SaveButtonText}>SALVAR</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
export default MoodScreens


