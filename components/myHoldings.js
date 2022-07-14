
import React,{useState,useEffect,useContext} from "react";
import {StyleSheet,Image,SafeAreaView,Text,TouchableOpacity,ScrollView,View} from "react-native";

const myHoldings = () => {
  return(
      <View style={styles.mainBox}>
          <Text style={styles.holdingText}>My Holdings</Text>
          <View style={styles.holdButtons}>
            <TouchableOpacity style={styles.leftBox}>
            <Image style={styles.eachIcon} source={require('./assets/add.png')} />
              <Text style={styles.mainText}>
                Add symbol
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightBox}>
            <Image style={styles.eachIcon} source={require('./assets/edit.png')} />
              <Text style={styles.mainText}>
                Edit list
              </Text>
            </TouchableOpacity>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
mainBox:{
  backgroundColor:"#E1E0E6",
  marginTop:"20%",
  height:273,
  borderRadius:30,
  width:"80%",
  marginLeft:"9%"
},
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

export default myHoldings;