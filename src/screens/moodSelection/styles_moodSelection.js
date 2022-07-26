import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    SafeView: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
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
        alignItems: 'center'
    },
    TextView: {
        alignItems: 'center',
    },
    TextHowAreYou: {
        paddingTop: 40,
        fontSize: 25,
        color: 'black',
        fontFamily: 'SourceSansPro-Black',
    },
    ViewDate: {
        paddingTop: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    IconStyle: {
        fontSize: 12,
    },
    HumorStyle:{
        alignItems: 'center', 
        justifyContent: 'space-evenly', 
    },
    HumorSelect: {
        alignItems: 'center',
        padding: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    Align:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 100,
        height: 50,
        width: 50
    },
    Humors: {
        width: 40,
        height: 40,
    },
    HumorsTxts: {
        
        fontFamily: 'SourceSansPro-Regular',
        fontSize:  11,
    },
    ActionDecision: {
        paddingTop: 30,
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 10,
        width: 350,
        height: 450,
        borderWidth: 1,
    },
    ActionIconTextStyle:{
        width: '100%',
        padding: 30,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ActionIcons: {
        paddingTop: 20,
        flexDirection: 'row',
        flex: 1,
    },
    ActionIconStyle: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 100,
        width: 59,
        height: 59,
    },
    ActionTextStyle:{
        fontFamily: 'SourceSansPro-Regular',
        fontSize:  12,
        fontWeight: '600',
        color: '#000000',
    },
    TextDay:{
        padding: 20,
    },
    iconsAlign:{

    },
    TextDayStyle: {
        borderRadius: 20,
        backgroundColor: 'white',
        width: 350,
        height: 100,
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
        textAlign: 'center',
    }
})

export default styles