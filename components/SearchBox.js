import React from "react";
import {StyleSheet,View,Text,TextInput} from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons"

const SearchBox = (placeholderText,type) => {
    return(
        <View style={{
            borderColor:"black",
            flexDirection:"row",
            alignItems:"center",
            borderWidth: "1",
            borderRadius:25,
            justifyContent:"space-evenly",
            marginTop:"20%"
        }}>
            <View style={{padding:3}}>
                <Ionicons name="search-outline" size={35} color="black"/>
            </View>
            <View style={{padding:3,width:"70%"}}>
                <TextInput
                style={{flexGrow:1}}
                placeholderTextColor="black"
                placeholder={placeholderText}/>
            </View>
        </View>
    )
}

export default SearchBox;