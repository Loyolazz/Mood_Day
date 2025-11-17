import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { SourceSansPro_400Regular } from '../assets/fonts/SourceSansPro/SourceSansPro-Regular.ttf';

const actionsList = {
    sport: {
        nome: 'esportes',
        image: require('../assets/atividades/sports.png')
    },
    cook: {
        nome: 'cozinhar',
        image: require('../assets/atividades/cooking.png')
    },
    party: {
        nome: 'festa',
        image: require('../assets/atividades/party.png')
    },
    games: {
        nome: 'jogos',
        image: require('../assets/atividades/games.png')
    },
    goodMeal: {
        nome: 'sai para Comer',
        image: require('../assets/atividades/good_meal.png')
    },
    movies: {
        nome: 'filmes',
        image: require('../assets/atividades/movies.png')
    },
    rest: {
        nome: 'descansei',
        image: require('../assets/atividades/rest.png')
    },
    shopp: {
        nome: 'shopping',
        image: require('../assets/atividades/shopping.png')
    },
    dates: {
        nome: 'encontros',
        image: require('../assets/atividades/date.png')
    }
}

const Actions = (props) => {
    const actionSize = props.data.length
    return (
        <View style={{flexDirection: 'row'}}>
            {props.data.map((value, index) => (
                <View key={index} style={{flexDirection: 'row'}}>
                    <Image style= {{width: 20, height: 20,}} source={actionsList[value].image}/>
                    <Text style={styles.order}>{actionsList[value].nome}</Text>
                    {props.data[actionSize - 1] !== value && (<Text style={styles.dot}> • </Text>)}
                </View>
            ))}
        </View>
    );
}


const styles = StyleSheet.create({
    order:{
        paddingLeft: 8.51,
        fontFamily: SourceSansPro_400Regular,
        color: 'black',
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '900',
    },
    dot:{
        paddingHorizontal: 5,
        fontWeight: '900',
        color: 'black',
    },
})

export default Actions