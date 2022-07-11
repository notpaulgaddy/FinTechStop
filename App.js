// import {createAppContainer} from 'react-navigation';
// import {createNativeStackNavigator} from "react-navigation-stack";

// import Profile from "./screens/Profile";
// import Home from "./screens/Home";
// import Login from "./screens/Login";
// import Signup from "./screens/Signup";
// import Search from "./screens/Search";

// const navigator = createNativeStackNavigator({
//     Login: Login,
//     Signup:Signup
// },
// {
//     initialRouteName:"Signup",
//     defaultNavigationOptions:{
//         title:'Signup'
//     }
// }
// );

// export default createAppContainer(navigator);

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
        backgroundColor:"#E1E0E6",
        marginTop:"20%",
        height:263,
        borderRadius:30,
    },
    welcomeText:{
        fontWeight:'900',
        fontSize:26,
        marginTop:10
    }
})