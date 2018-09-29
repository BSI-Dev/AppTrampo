import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList, Button,Alert, Image} from 'react-native';
import {Header, Container} from "native-base";
import api from './../../services/api';


export default class Buscar extends Component {

  static navigationOptions ={
    title:"Trampo"
  };
  //toda vez que há variação de estado, o método render é executado
  state = {

  };

  componentDidMount(){
    this.loadAnuncios();
  }
  //utilizando arrowfunction para poder enxergar o 'this'
  loadAnuncios = async () => {
    const response = await api.get(); //colocar o caminho a partir da baseUrl que é pra buscar os itens
    
  };

  render() {
    return (
      <Container>
        <FlatList></FlatList>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  containerImage:{
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  textHeader:{
    top: 10,
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
    fontSize: 30,
  },
  header:{
    backgroundColor: 'green',
  },
  perfis:{
    top: 10,
    alignItems: 'center',
    flexDirection: 'row',
    padding:10,
    justifyContent: 'space-between',
  },
  logo:{
    top:10,
    width: 300,
    height:300,
  },
  
});
