/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button,Alert} from 'react-native';
import {Header, Container} from "native-base";


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Header style={styles.header}><Text style ={styles.textHeader}>Trampo</Text></Header>
        <View style={styles.perfis}>
        <Button 
          large
          color='darkgrey' 
          title='Cliente'

          onPress={() => {Alert.alert('You tapped the button!');}}> 
            
          </Button>
          <Button
            large
            
            color='darkgrey'  
            title='Prestador' onPress={() => {
            Alert.alert('You tapped the button!');
            }}>
            </Button> 
        </View>
        <View style={styles.container}>
          
            
          
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
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
  }
  
});
