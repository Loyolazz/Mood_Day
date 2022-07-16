import { SourceSansPro_400Regular } from '../../assets/fonts/SourceSansPro/SourceSansPro-Regular.ttf';
import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 28,
        padding: 20,
        borderRadius: 15,
        marginVertical: 10,
        top: 17,
    },
    Week: {
        fontFamily: SourceSansPro_400Regular,
        fontSize: 16,
        lineHeight: 26,
        color: '#ACACAC',
        fontWeight: 'normal',
        left: 8,
        fontWeight: '400',
    },
    Status: {
        fontFamily: SourceSansPro_400Regular,
        fontSize: 24,
        lineHeight: 26,
        letterSpacing: 0.5,
        color: 'red',
        fontWeight: '700',
        left: 8,
    },
    Hora: {
        fontFamily: SourceSansPro_400Regular,
        fontSize: 13,
        lineHeight: 30,
        letterSpacing: 0.5,
        color: '#ACACAC',
        fontWeight: '700',
        left: 13,
    },
    Action: {
        fontFamily: SourceSansPro_400Regular,
        fontSize: 13,
        lineHeight: 25,
        fontWeight: '600',
        color: 'black',
    },
    Descrip: {
        fontFamily: SourceSansPro_400Regular,
        fontSize: 13,
        lineHeight: 25,
        fontWeight: '400',
        color: '#ACACAC',
    }
})

export default styles