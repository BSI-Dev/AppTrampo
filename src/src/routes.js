import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Login from './pages/Login/Login';

export default createStackNavigator({
    Main,
    Login:Login,
}, {
    navigationOptions:{
        headerStyle: {
            backgroundColor:"green",
            
        },
        headerTintColor: "white"
    }

});