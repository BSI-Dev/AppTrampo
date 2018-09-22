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
