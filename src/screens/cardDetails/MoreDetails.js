import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles_MoreDetails';
import DATA from '../../api/list';


function idSearch(id) {
    let action = null
    for (let index = 0; index < DATA.length; index++) {
        const element = DATA[index];
        if (element.id === id) {
            action = element
            break;
        }
    }
    return (action)
}

const MoreDetails = (props) => {
    const { itemId } = props.route.params
    let item = idSearch(itemId)
    const Navigation = useNavigation()
    return (
        <View style={styles.FullView}>

            <TouchableOpacity style={styles.BackBottom}
                onPress={() => Navigation.goBack()}>
                <Icon sytle={styles.BackIcon} name='chevron-left'
                size={30}/>

            </TouchableOpacity>
            <View style={styles.FristView}>

                <View style={styles.SecondView}>
                    <Icon style={styles.IconStyle} name='schedule' size={12} />
                    <Text>{item.hour}</Text>
                </View>

                <View style={styles.SecondView}>

                    <Icon style={styles.IconStyle} name='calendar-today' size={12} />
                    <Text>{item.date}</Text>
                </View>

                <View style={styles.ThirdView}>
                   
                    <Text style={[styles.Status, { color: cores[item.status] }]}>{item.status}</Text>
                </View>

            </View>
            <Card style={styles.cardContainer}>
                <View style={styles.IconView}>
                    <Icon style={styles.IconStyles} size={30}>{item.icon1}</Icon>
                    <Icon style={styles.IconStyles} size={30}>{item.icon2}</Icon>
                    <Icon style={styles.IconStyles} size={30}>{item.icon3}</Icon>

                </View>

                <View style={styles.IconView}>
                    <Text style={styles.DescrpIcon}>{item.actions_safe1}</Text>
                    <Text style={styles.DescrpIcon}>{item.actions_safe2}</Text>
                    <Text style={styles.DescrpIcon}>{item.actions_safe3}</Text>
                </View>
            </Card>

            <Card style={styles.CardContainer}>
                <View>
                    <Text style={styles.Descri}>{item.descript}</Text>
                </View>
            </Card>
        </View>
    )
}

const cores = {
    BEM: '#E24B4B',
    MAL: '#4B75E2',
    TRISTE: '##6EACE4',
    OK: '#FFA770',
    FELIZ: '#39B20F',
    INDIFERENTE: '#000000',
}

export default MoreDetails;