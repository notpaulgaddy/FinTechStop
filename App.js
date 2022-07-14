import {createAppContainer} from 'react-navigation';
import {createNativeStackNavigator} from "react-navigation-stack";

// import Profile from "./screens/Profile";
// import Home from "./screens/Home";
// import Login from "./screens/Login";
// import Signup from "./screens/Signup";
// import Search from "./screens/Search";

const AppNavigator = createNativeStackNavigator({
    Login: Login
},
{
    initialRouteName:"Login",
    defaultNavigationOptions:{
        title:"App"
    }
}
);

const Navigator = createAppContainer(AppNavigator);

// export default function App(){
//   return(
//     <Navigator>
//       <Login/>
//     </Navigator>
//   );
// }

// const navigator = createStackNavigator(
//   {
//     Home: Login
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       title: 'App',
//     },
//   }
// );

// export default createAppContainer(Navigator);