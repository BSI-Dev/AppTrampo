import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button,Alert, Image} from 'react-native';
import {Header, Container} from "native-base";


export default class App extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}><Text style ={styles.textHeader}>Trampo</Text></Header>
        <Text>TESTE        </Text>
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
