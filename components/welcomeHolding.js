import React from "react";
import {StyleSheet,View,Text,TextInput} from 'react-native';

const welcomeHolding = () => {
    return(
        <>
        <View style={styles.mainBox}>
            <Text style={styles.welcomeText}>Welcome Paul, here are your holdings</Text>
            <Text style={styles.holdingAmt}>$15,724.93</Text>
            <View style={styles.totalGainLine} horizontal>
                <Text style={styles.gainText}>Total Gain</Text>
                <Text style={styles.glAmt}>+2,601.52</Text>
            </View>
            <Text style={styles.date}>July 10 2022, 14:34 EDT</Text>
        </View>
        </>
    )
}

export default welcomeHolding;

const styles = StyleSheet.create({
    mainBox:{
        backgroundColor:"#E1E0E6",
        marginTop:"20%",
        height:273,
        borderRadius:30,
        width:"80%",
        marginLeft:"9%"
    },
    welcomeText:{
        fontWeight:'900',
        fontSize:26,
        marginTop:10,
        textAlign:"center"
    },
    holdingAmt:{
        fontSize:46,
        flex: 1,
        flexDirection: 'column',
        textAlign:"center",
        marginTop:10
    },
    totalGainLine:{
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection:"row",
      paddingBottom:30,
      paddingTop:-30
      // textAlign:"center",
      // justifyContent:"flex-start",
    },
    gainText:{
        fontSize:26,
        color:"black"
    },
    date:{
        fontSize:22,
        textAlign:'center'
    },
    glAmt:{
      fontSize:26,
      color:"#3EC95E"
    }
}) 