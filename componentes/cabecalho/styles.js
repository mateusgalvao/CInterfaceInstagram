import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:20,

    },
    textWhite: {
        color:'#fff',
    },
    header: {
        position: "absolute",
        width: '100%',
        zIndex:3,
        top: 0,
    },
    headerSafeAreaView: {
        marginTop: 35,
        flexDirection: 'row',
        marginLeft:250,
        marginBottom:20,
        width: 110,
        height: 50,
        justifyContent:'space-evenly',

    },
    hero:{
        padding: 1,
        flex: 100,
        marginTop: 15,
        marginLeft:15,
        width: 150,
        height: 70,
        position: 'absolute',
        backgroundColor:'green'
    },
});
export default styles;