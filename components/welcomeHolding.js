import React from "react";
import {StyleSheet,View,Text,TextInput} from 'react-native';

const welcomeHolding = () => {
    return(
        <>
        <View style={styles.mainBox}>
            <Text style={styles.welcomeText}>Welcome Paul, here are your holdings</Text>
            <Text style={styles.holdingAmt}>$15,724.93</Text>
            <View style={styles.totalGainLine}>
                <Text style={styles.gainText}>Total Gain</Text>
                <Text style={styles.glAmt}>Total Gain</Text>
                <Text style={styles.date}>July 10 2022, 14:34 EDT</Text>
            </View>
        </View>
        </>
    )
}

export default welcomeHolding;

const styles = StyleSheet.create({
    mainBox:{
        width:"70%",
        backgroundColor:"#E1E0E6",
        alignItems:"center",
    },
    welcomeText:{
        fontWeight:'900',
        fontSize:26,
        marginTop:10
    }
})