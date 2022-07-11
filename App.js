import {createAppContainer} from 'react-navigation';
import {createNativeStackNavigator} from "react-navigation-stack";

import Profile from "./screens/Profile";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Search from "./screens/Search";

const navigator = createNativeStackNavigator({
    Login: Login,
    Signup:Signup
},
{
    initialRouteName:"Signup",
    defaultNavigationOptions:{
        title:'Signup'
    }
}
);

export default createAppContainer(navigator);