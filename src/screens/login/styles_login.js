import { SourceSansPro_400Regular } from '../../assets/fonts/SourceSansPro/SourceSansPro-Regular.ttf';
import { SourceSansProBold } from '../../assets/fonts/SourceSansPro/SourceSansPro-Bold.ttf'
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#304FFE',
    },
    logo: {
      width: 250,
      height: 250,
      top: -110,
    },
    input: {
      top: -75,
      marginTop: 21,
      padding: 10,
      width: 320,
      height: 46,
      borderRadius: 10,
      backgroundColor: '#F6F6F6',
      fontSize: 20,
      fontFamily: SourceSansPro_400Regular,
      fontStyle: 'normal',
      lineHeight: 25,
    },
    button: {
      backgroundColor: '#C6CEFF',
      borderRadius: 10,
      width: 140,
      height: 50,
      top: -20,
    },
    buttonText: {
      fontFamily: SourceSansProBold,
      fontSize: 20,
      lineHeight: 50,
      color: '#304FFE',
      fontWeight: 'bold',
      left: 32,
    },
    Error: {
      justifyContent:'center',
      alignItems:'center',
      flex:1,
      marginBottom:200
  }
})

export default styles