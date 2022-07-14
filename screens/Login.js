import React,{useState,useEffect,useContext} from "react";
import {StyleSheet,TextInput,SafeAreaView,Text,TouchableOpacity,View} from "react-native";

const Login = ({navigation}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const goToSignup = () => {
        navigation.navigate("Signup")
    };
    const doLogin = () =>{

    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.topLogo}>FinTechStop</Text>
                <Text style={styles.textTop}>Sign in to FinTechStop</Text>
                <Text style={styles.textBottom}>using your FinTechStop account</Text>
                <View style={styles.formArea}>
                <View style={styles.inputArea}>
                  <TextInput 
                  style={styles.placeholderText}
                  placeholder="Email"
                  keyboardType="email-address"
                  placeholderTextColor="black"/>
                </View>
                <View style={styles.inputArea}>
                  <TextInput 
                  style={styles.placeholderText}
                  placeholder="Password"
                  placeholderTextColor="black"/>
                </View>
                <TouchableOpacity
                style={styles.authBtnArea}
                onPress={doLogin}
                // disabled={disabled}
                >
                  <Text style={styles.signupTxt}>
                    Login
                  </Text>
                </TouchableOpacity>
                <Text 
                style={styles.fullDHA}
                onPress={goToSignup}>
                  Don't have an account?  Signup here
                </Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#23273C",
        alignItems:"center",
        justifyContent:"center",
        width:"100%"
    },
    topLogo:{
      color:'white',
      fontSize:50,
      fontWeight:'bold',
      marginTop:"-40%",
      width:"70%",
      textAlign:'center'
    },
    textTop:{
      color:'white',
      fontWeight:'bold',
      fontSize:25,
      marginTop:'5%',
      width:"70%",
      textAlign:'center'
    },
    textBottom:{
      color:"#D8D8D8",
      fontSize:25,
      width:"70%",
      textAlign:'center'
    },
    formArea:{
      marginTop:15,
      width:"70%",
    },
    inputArea:{
      backgroundColor:'white',
      borderRadius:30,
      height:45,
      marginBottom:20
    },
    placeholderText:{
      marginTop:15,
      textAlign : "center"
    },
    authBtnArea:{
      width:"100%",
      borderRadius:10,
      height:50,
      color:"white",
      alignItems:"center",
      justifyContent:"center",
      marginTop:"10%",
      backgroundColor:"#FF5460",
      borderRadius:30,
    },
    signupTxt:{
      color:'white',
      fontWeight:'700',
    },
    fullDHA:{
      marginTop:"10%",
      textAlign:'center',
      color:'white'
    }
})

export default Login;