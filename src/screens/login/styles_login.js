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
    margin: -50,
    width: 250,
    height: 250,
    top: -70,
  },
  inputEmail: {
    width: '75%',
    height: 46,
    backgroundColor: "#F7F7F7",
    marginTop: '5%',
    paddingLeft: '4%',
    borderRadius: 10,
    color: '#969696',
    fontSize: 20,
    fontFamily: SourceSansPro_400Regular,
    fontStyle: 'normal',
    lineHeight: 25,
    paddingLeft: '4%',
  },
  inputPassword: {
    marginBottom: 100,
    width: '75%',
    height: 46,
    backgroundColor: "#F7F7F7",
    marginTop: '5%',
    paddingLeft: '4%',
    borderRadius: 10,
    color: '#969696'
  },
  button: {
    margin: -60,
    backgroundColor: '#C6CEFF',
    borderRadius: 10,
    width: 140,
    height: 50,
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
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginBottom: 200
  },
  inputArea: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
    
  },
})

export default styles