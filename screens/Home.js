import React from 'react';
import {View,StyleSheet,ScrollView} from  'react-native'
import myHoldings from './components/myHoldings';
import SearchBox from './components/searchBox';
import welcomeHolding from './components/welcomeHolding';

const Home  = () => {
    return(
        <View>
            <SearchBox/>
            <welcomeHolding/>
            <ScrollView>
                <myHoldings/>
            </ScrollView> 
        </View>
    )
}

export default Home;