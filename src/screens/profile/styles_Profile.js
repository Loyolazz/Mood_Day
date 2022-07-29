import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    AreaView: {
        backgroundColor: '#F5F5F5'
    },
    Profile: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ImagePerfil: {
        width: 128,
        height: 128,
    },
    Padding: {
        padding: 10
    },
    Hello: {
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: '400',
        fontSize: 36,
        lineHeight: 50,
        color: '#000000',
    },
    InfoText: {
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: '900',
        fontSize: 15,
        lineHeight: 19,
        color: '#000000'
    },
    DataInfo: {
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 19,
        color: '#000000'
    },
    Aling: {
        marginEnd: 100,
        padding: 12,
    },
    AlingData: {
        flexDirection: 'row',
    },
    PerfilEdit: {
        padding: 1,
    },
    PerfilEditButton: {
        backgroundColor: '#304FFE',
        borderRadius: 6,
        width: 350,
        height: 52,
        padding: 15,
    },
    PerfilEditButtonText: {
        color: '#FFFFFF',
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: '900',
        fontSize: 15,
        lineHeight: 19,
        textAlign: 'center',
    },
    PerfilExitButton: {
        padding: 15,
        width: 350,
        height: 52,
        borderRadius: 6,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 2
    },
    PerfilExitButtonText: {
        color: '#000000',
        fontFamily: 'SourceSansPro-Regular',
        fontWeight: '900',
        fontSize: 15,
        lineHeight: 19,
        textAlign: 'center',
    },
    ModalStyleOne: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: '#F5F5F5',
    },
    ModalStyleTwo:{
        flex: 1,
        backgroundColor: '#rgba(0,0,0,0.6)',
        alignItems: 'center',
    },
    ModalContainer:{
        width: 375,
        height: 180,
        borderRadius: 20,
        marginTop: 260,
        backgroundColor: '#F5F5F5',
    },
    ModalViewOne:{
        width: 375,
        height: 180,
        borderRadius: 20,
        marginTop: 260,
        backgroundColor: '#F5F5F5',
        fontSize: 15,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    ViewModalBotton:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingLeft: 155
    },
    ModalTop:{
        paddingLeft: 30,
        marginTop: 20,
        marginBottom: 45
    },  
    Atteion: {
        marginBottom: 10,
        fontSize: 24,
        color: '#000',
        fontWeight: '700',
        justifyContent: 'flex-start',
        fontFamily: 'SourceSansPro-Regular'
    },
    Exit: {
        fontSize: 19,
        fontFamily: 'SourceSansPro-Regular'
    },
    CanYes:{
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
        fontFamily: 'SourceSansPro-Regular',
    }
})

export default styles