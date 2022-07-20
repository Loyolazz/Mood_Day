import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Button } from 'react-native';
import styles from './styles_moodSelection';
import { Icon } from "@rneui/themed";


function ModalScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }} >

            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           
                <View style={styles.homepage}>
                    <Icon
                        style={styles.neutral}
                        name='sentiment-neutral'
                        color="#808080"
                        size={70}
                    />
                    <Text
                        style={styles.homeInfo}>
                        Estamos em Testes
                    </Text>
                    <Button onPress={() => navigation.goBack()} title="Dismiss" />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default ModalScreen

