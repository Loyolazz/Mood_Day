import { SourceSansPro_400Regular } from '../../assets/fonts/SourceSansPro/SourceSansPro-Regular.ttf';
import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    FristView: {
        marginTop: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    SecondView: {
        marginBottom: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    ThirdView: {
        justifyContent: 'center',
    },
    IconStyle: {
        fontSize: 13,
    },
    Image: {
        marginTop: 10,
        width: 70,
        height: 70,
        marginBottom: 10,
    },
    IconView: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    IconStyles: {
        color: 'white',
        width: 50,
        height: 50,
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#304FFE',
    },
    DescrpIcon: {
        fontFamily: SourceSansPro_400Regular,
        fontWeight: '800',
        fontSize: 20,
        color: 'black',
        paddingHorizontal: 10,
        padding: -1,
    },
    cardContainer: {
        margin: 15,
        paddingHorizontal: 5,
    },
    CardContainer: {
        margin: 15,
        padding: 10,
        flexDirection: 'row',
        top: 9,
    },
    Descri: {
        fontFamily: SourceSansPro_400Regular,
        margin: 12,
        fontSize: 16,
    },
    Status: {
        fontFamily: SourceSansPro_400Regular,
        fontSize: 25,
        letterSpacing: 0.5,
        fontWeight: '700',
    },
    BackBottom: {
        alignSelf: 'flex-start',
        top: 28,
        left: 26,
        borderRadius: 50, 
        backgroundColor: 'rgba(48, 79, 254, 0.1)',
        width: 50,
        height: 50,
        padding: 10,
        borderRadius: 20,
    }
})

export default styles