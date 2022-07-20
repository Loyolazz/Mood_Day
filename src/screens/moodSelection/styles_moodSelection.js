import { StyleSheet } from 'react-native';
import { SourceSansPro_400Regular } from '../../assets/fonts/SourceSansPro/SourceSansPro-Regular.ttf';


const styles = StyleSheet.create({
    homepage: {
        backgroundColor: '#DCDCDC',
        width: 428,
        height: 948,
        padding: 100
    },
    homeInfo: {
        fontFamily: SourceSansPro_400Regular,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 23,
        textAlign: 'center',
        letterSpacing: -0.3,
        margin: 10,
        marginTop: 10,
        color: '#808080',
    },
    neutral: {
        marginTop: 150,
        padding: 1,
    }
})

export default styles