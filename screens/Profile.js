import React from "react";
import {Text,View, TouchableOpacity,Image,StyleSheet} from "react-native";

const Profile = () => {
    return(
        <View>
        <Text style={styles.profileText}>Profile</Text>
        <Image style={styles.pfp}  source={require('./assets/add.png')}/>
        <View vertical style={styles.nameEmail}>
            <Text style={styles.centerText}>Name</Text>
            <Text style={styles.centerText}>Email</Text>
        </View>
        <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.deleteAccount}>
                Delete account
            </Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    profileText:{
        color:'white',
        textAlign:'center'
    },
    pfp:{
        height:147,
        width:147,
        borderRadius:250,
    },
    nameEmail:{
        flexDirection:'column'
    },
    centerText:{
        textAlign:'center',
        color:'white'
    },
    deleteAccount:{
        color: "#FF0000"
    },
    deleteButton:{
        backgroundColor:"white",
        width:207,
        height:49
    }
})

export default Profile