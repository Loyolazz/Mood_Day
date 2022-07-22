import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './styles_mood'
import Icon from 'react-native-vector-icons/MaterialIcons';

const Mood = () => {
    return (
        <SafeAreaView >
            <View style={styles.homepage}>
                <Icon
                    style={styles.neutral}
                    name='sentiment-neutral'
                    color="#808080"
                    size={70}
                />

                <Text
                    style={styles.homeInfo}>
                    Você ainda não tem nenhum
                    registro diário. Para começar,
                    toque no ícone de adicionar na tela.
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Mood