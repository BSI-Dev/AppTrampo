import { createStackNavigator, StackNavigator } from 'react-navigation';


import Main from './pages/main';
import Login from './pages/Login/Login';
import Listar from './pages/Listar/Listar';
import Listar1 from './pages/Listar/Listar1';
import Visitar from './pages/Buscar/Visitar';
import Buscar from './pages/Buscar/Buscar';
import Cadastro from './pages/Cadastro/Cadastro';

export default createStackNavigator({
    Main: Main,
    Login: Login,
    Buscar:Buscar,
    Listar: Listar,
    Visitar: Visitar,
    Cadastro: Cadastro,
    Listar1: Listar1,
}, {
    navigationOptions:{
        headerStyle: {
            backgroundColor:"green",
            
        },
        headerTintColor: "white"
    }

});