// import {createAppContainer} from 'react-navigation';
// import {createNativeStackNavigator} from "react-navigation-stack";

// import Profile from "./screens/Profile";
// import Home from "./screens/Home";
// import Login from "./screens/Login";
// import Signup from "./screens/Signup";
// import Search from "./screens/Search";

// const navigator = createNativeStackNavigator({
//     Login: Login
// },
// {
//     initialRouteName:"Login",
//     defaultNavigationOptions:{
//         title:'Login'
//     }
// }
// );

// export default createAppContainer(navigator);


import React,{useState,useEffect,useContext} from "react";
import {StyleSheet,TextInput,SafeAreaView,Text,TouchaableOpacity,View} from "react-native";

const Login = ({navigation}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const goToSignup = () => {
        navigation.navigate("Signup")
    };

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
                  placeholder="Email"
                  keyboardType="email-address"
                  placeholderTextColor="black"/>
                </View>
            </View>
            </View>
        </>
    )
}

export default Login;

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
      marginTop:-550,
      width:"70%",
      textAlign:'center'
    },
    textTop:{
      color:'white',
      fontWeight:'bold',
      fontSize:25,
      marginTop:'10%',
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
      marginBottom:20,
    },
    placeholderText:{
      marginTop:15,
      marginRight:150,
    }
})