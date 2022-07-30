import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    View: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Profile: {
        flex: 1,
        alignItems: 'center',
    },
    ImagePerfil: {
        width: 100,
        height: 100,
        marginTop: 50,
        marginBottom: 20,
    },
    Padding: {
        paddingBottom: 20
    },
    PicChange: {
        borderRadius: 6,
        borderWidth: 2,
        backgroundColor: 'rgba(48, 79, 254, 0.14)',
        borderColor: 'rgba(48, 79, 254, 0.4)',
        width: 190,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextChange: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 15,
        fontWeight: '900',
        color: '#304ffe'
    },
    Aling: {
        marginEnd: 100,
        paddingLeft: 100,
        width: '100%',
    },
    AlingInfo: {
        flexDirection: 'row',
    },
    Info: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 15,
        fontWeight: '900',
        color: '#000000',

    },
    TextInput: {
        backgroundColor: '#FFFFFF',
        width: 300,
        borderColor: '#000000',
        borderWidth: 1,
        marginTop: 7,
        marginBottom: 7,
    },
    SaveButton: {
        backgroundColor: '#304FFE',
        borderRadius: 6,
        width: 305,
        height: 52,
        marginTop: 20,
        padding: 15,
    },
    SaveButtonText: {
        color: '#FFFFFF',
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: '900',
        fontSize: 15,
        lineHeight: 19,
        textAlign: 'center',
    },
    BottonGender: {
        backgroundColor: '#FFFFFF',
        width: 300,
        height: 55,
        borderColor: '#000000',
        borderWidth: 1,
        marginTop: 7,
        marginBottom: 7,
    },
    Gender: {
        top: 15,
    },
    expand: {
        alignSelf: 'flex-end',
        bottom: 10,
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
    },
    SaveButton2: {
        backgroundColor: '#304FFE',
        borderRadius: 6,
        width: 305,
        height: 52,
        marginTop: 20,
        padding: 15,
        top: 135,
        left: 50
    },
    SaveButtonText2: {
        color: '#FFFFFF',
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: '900',
        fontSize: 15,
        lineHeight: 19,
        textAlign: 'center'
    },
    ImagePerfil2: {
        width: 100,
        height: 100,
        top: 80,
        marginTop: 50,
    },
    Alinha: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },
    Select: {
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: '900',
        fontSize: 20,
        left: 65,
        top: 80,
        padding: 20,
    },
    Organiz:{
        top: 50,
    }

})

export default styles