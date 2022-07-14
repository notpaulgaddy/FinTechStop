import React from  "react";
import {View,Image,Text,Dimensions,StyleSheet,TouchableOpacity} from  "react-native";
const windowWidth = Dimensions.get('window').width;

const stockHeader = () => {
    <View>
        <View style={styles.box}>
            <View style={styles.topLine}>
                <Text style={styles.stockName}>Microsoft, Inc.</Text>
            </View>
            <View style={styles.lineTwo}>
                <TouchableOpacity style={styles.stockSectorButton}>
                    <Text style={styles.stockSectorText}>Software Infrastructure</Text>
                </TouchableOpacity>
                <Image style={styles.stockLogo}/>
            </View>
            <View style={styles.lineThree}>
                <View style={styles.stockPriceUSD}>
                    <Text style={styles.stockPrice}>$264.51</Text>
                </View>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    box:{
        width: (windowWidth*0.852),
        height:215,
        backgroundColor:"#E1E0E6"
    },
    topLine:{
        flexDirection:'row'
    },
    stockName:{
        fontSize:26,
    },
    lineTwo:{
        flexDirection:'row'
    },
    stockSectorButton:{
        backgroundColor:"#FFEA00",
        borderRadius:20,
    },
    stockSectorText:{
        fontSize:12,
        textAlign:"center"
    },
    stockLogo:{
        width:57,
        height:57,
        borderRadius:"50%",
    },
    lineThree:{
        flexDirection:"row"
    },
    stockPriceUSD:{
        flexDirection:"row"
    },
    stockPrice:{
        fontSize:46,
        fontWeight:"bold",
        
    }

})

export default stockHeader;