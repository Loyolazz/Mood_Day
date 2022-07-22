import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    SafeView: {
        
    },
    CloseBottom: {
        alignSelf: 'auto',
        top: 20,
        left: 30,
        borderRadius: 9,
        backgroundColor: 'rgba(48, 79, 254, 0.1)',
        width: 36,
        height: 36,
        padding: 8,

    },
    AllView: {
        
    },
    TextView: {
        alignItems: 'center',
        marginBottom: 5,
    },
    TextHowAreYou: {
        paddingTop: 40,
        fontSize: 25,
        color: 'black',
        fontFamily: 'SourceSansPro-Black',
    },
    ViewDate: {
        paddingTop: 7,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 5,
    },
    IconStyle: {
        fontSize: 12,
    },
    HumorPng: {
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginStart: 20,
        marginEnd: 10,
    },
    Humors: {
        width: 35,
        height: 35,
    },
    HumorTxt: {
        paddingTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginStart: 10,
        marginEnd: 5,
    },
    HumorsTxts: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize:  11,
    },
    ActionDecision: {
        borderRadius: 20,
        backgroundColor: 'white',
        marginTop: 50,
        padding: 10,
        width: '90%',
        height: 450,
        marginLeft: 21,
        borderWidth: 1,
    },
    ActionIcons: {
        margin: 8,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 1,
    },
    ActionIconStyle: {
        borderWidth: 1,
        borderColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 100,
        width: 59,
        height: 59,
    },
    ActionText: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
       // marginStart: 2,
       // marginEnd: 1,
    },
    ActionTextStyle:{
        fontFamily: 'SourceSansPro-Regular',
        fontSize:  12,
        fontWeight: '600',
        color: '#000000',
    },
    TextDay: {
        borderRadius: 20,
        backgroundColor: 'white',
        marginTop: 30,
        // padding: 10,
        width: '90%',
        height: 89,
        marginLeft: 21,
        borderWidth: 1,
    },
    SaveButtonLoc:{
        padding: 20,
    },
    SaveButton:{
        backgroundColor: '#304FFE',
        borderRadius: 6,
        width: 350,
        height: 52,
        padding: 15,
    },
    SaveButtonText:{
        color: '#FFFFFF',
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: '900',
        fontSize: 15,
        lineHeight: 19,
        alignItems: 'center',
        textAlign: 'center',
    }
})

export default styles