
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Platform,TouchableOpacity,Image,StatusBar} from 'react-native';
import { DrawerNavigator, StackNavigator, TabNavigator, createStackNavigator } from 'react-navigation'


//import ItemList from './ItemList'
//import Item from './Item'

import Buscar from './pages/Buscar/Buscar'
import TabDemanda from './pages/Listar/TabDemanda'
import TabPrestador from './pages/Listar/TabPrestador'
import Listar from './pages/Listar/Listar'
import Listar1 from './pages/Listar/Listar1'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'


import Perfil from './pages/Cadastro/Perfil'
import Demanda from './pages/Cadastro/Demanda'
import Cartao from './pages/Cartao/Cartao'
import AnuncioDemanda from './pages/Anuncio/AnuncioDemanda'

const StackPerfil = StackNavigator({
    Login: { screen: Login },
    Cadastro: { screen: Cadastro },
})


const StackLista = StackNavigator({
    Listar: { screen: Listar },
    Listar1: {screen: Listar1},
    AnuncioDemanda: {screen: AnuncioDemanda},
    //Item: { screen: Item },
})


const Tabs = TabNavigator({
  TabDemanda: { 
    screen: TabDemanda,
    navigationOptions: {
      title: 'Demanda'
    }
  },
  TabPrestador: { 
    screen: Listar, 
    navigationOptions: {
        title: 'Prestador'
    }
}
}, {
  order: [ 'TabPrestador','TabDemanda'],
  tabBarOptions: {
    color:'#009624',
	  activeTintColor: '#009624',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: '#FFFFFF',
    },
    indicatorStyle: {
      backgroundColor: '#009624',
    },
  }
})

const Drawer = DrawerNavigator({
  //Stack: { screen: Stack },
  Buscar:{
    screen: Buscar
  },
  Listar:{
    screen: StackLista,
  },
  /*Tabs: { 
    screen: Tabs,
    navigationOptions: {
      title: 'Demandas/Prestador'
    }
  },*/
  Perfil: { 
    screen: StackPerfil,
    navigationOptions: {
      title: 'Perfil'
    }
  },
  Demanda: { 
    screen: Demanda,
    navigationOptions: {
      title: 'Demanda'
    }
  },
  Cartao: {
    screen: Cartao,
    navigationOptions: {
      title:'Pacote'
    }
  }

},{
  initialRouteName: 'Buscar',
  drawerWidth: 300,
})

const MenuImage = ({navigation}) => {
  if (!navigation.state.isDrawerOpen) {
      return <Image source={require('./images/menu-button.png')}/>
  } else {
      return <Image source={require('./images/left-arrow.png')}/>
  }
}


export default Main = createStackNavigator({
  Drawer:{
    screen: Drawer
  }
},{
  navigationOptions: ({ navigation }) => ({
      title: 'Trampo', 
      headerLeft: 
      <TouchableOpacity  onPress={() => {navigation.openDrawer()} }>
          <MenuImage style="styles.bar" navigation={navigation}/>
      </TouchableOpacity>,
      headerStyle: {
          backgroundColor: '#009624',
      },
      headerTintColor: '#fff'
  })
});