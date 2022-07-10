import React,{useState,useEffect,useContext} from "react";
import{SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet,TextInput,Text,TouchaableOpacity,View} from "react-native";

const Login = ({navigation}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const goToSignup = () => {
        navigation.navigate("Signup")
    };

    return (
        <>
            <SafeAreaView style={styles.container}>
                <Text>Hi</Text>
            </SafeAreaView>
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
    }
})