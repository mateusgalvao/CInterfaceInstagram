import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 'top',
      alignItems: 'center',
      justifyContent: 'center',
      height: 400,
        width: '100%',
    },
    logo: {
        height: 35,
        width: 35,
        borderRadius:35,
        backgroundColor:'blue',
        marginLeft:1,

    },
    capa:{
      height: 380,
        width: '100%',
    },
    espaco:{
      flexDirection: 'row',
      padding: 5,

    },
    buttonText:{
      fontSize:15,
      marginLeft:10,
      color: '#000',
      marginTop:25,
  },
  });

export default styles;