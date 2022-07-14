import React from "react";
import {View, Text,StyleSheet}  from "react-native";

const holdingText= () => {
    <View>
        <View style={styles.topText}>
            <Text style={styles.leftText}>MSFT</Text>
            <Text style={styles.rightText}>147.04</Text>
        </View>
        <Text style={styles.bottomText}>
            Microsoft
        </Text>
    </View>
}

const styles = StyleSheet.create({
    topText:{
        flexDirection:"column"
    },
    leftText:{

    },
    rightText:{

    },
    bottomText:{

    }
})

export default holdingText;