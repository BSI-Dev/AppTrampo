import { createStackNavigator, StackNavigator } from 'react-navigation';


import Main from './pages/main';
import Login from './pages/Login/Login';
import Buscar from './pages/Buscar/Buscar';
import Visitar from './pages/Buscar/Visitar';

export default createStackNavigator({
    Main: Main,
    Login: Login,
    Buscar: Buscar,
    Visitar: Visitar,
}, {
    navigationOptions:{
        headerStyle: {
            backgroundColor:"green",
            
        },
        headerTintColor: "white"
    }

});



// export const RootApp = StackNavigator({
//     Main:{ screen: Main,
//         navigationOptions:{
//                      headerStyle: {
//                      backgroundColor:"green",
                        
//                      },
//                      headerTintColor: "white"
//                  }
//     },
//     Login:{screen: Login,

//     },
// });