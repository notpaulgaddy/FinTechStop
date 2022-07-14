import React from  "react";
import {View,ScrollView,StyleSheet,Text} from "react-native";
import holdingText from "./components/holdingText";

const fullHoldings = () => {
    return(
        <>
        <View>
        <View style={styles.holdButtons}>
            <TouchableOpacity style={styles.leftBox}>
            <Image style={styles.eachIcon} source={require('./assets/add.png')} />
              <Text style={styles.mainText}>
                Add symbol
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
      holdButtons:{
      flexDirection:"row",
      },
      leftBox:{
      width:163,
      borderRadius:10,
      height:50,
      color:"white",
      alignItems:"center",
      justifyContent:"center",
      marginTop:"10%",
      backgroundColor:"#3EC3D5",
      borderRadius:30,
      },
      mainText:{
      fontSize:17,
      fontWeight:'bold'
      },
      rightBox:{
      width:163,
      borderRadius:10,
      height:50,
      color:"white",
      alignItems:"center",
      justifyContent:"center",
      marginTop:"10%",
      backgroundColor:"#FF5460",
      borderRadius:30,
      },
        holdingText:{
            fontSize:26,
            fontWeight:'bold',
            marginTop:10,
            textAlign:"center"
        },
        eachIcon:{
          width:29,
          height:29,
          alignItems:'flex-start'
        },
})

export default fullHoldings;