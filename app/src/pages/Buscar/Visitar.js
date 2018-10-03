import React, {Component} from 'react';
import {StyleSheet, View, Button, Image} from 'react-native';
import {Container} from "native-base";


const Visitar =({navigation}) => (
    <Container>
          {/* <Header style={styles.header}><Text style ={styles.textHeader}>Trampo</Text></Header> */}
          
          <View style={styles.containerImage}>
            
           <Image 
            style = {styles.logo}
           source={require('./../../assets/trampo.png')}
           
           />   
            
            <View style={styles.perfis}>
          <Button 
            large
            color='darkgrey' 
            title='Cliente'
            
             onPress={() => {navigation.navigate('Buscar');}}> 
             > 
            </Button>
            <Button
              large
              
              color='darkgrey'  
              title='Prestador' 
              onPress={() => navigation.navigate('Buscar')}
              />
               
          </View>
  
          </View>
        </Container>
      );
  
      Visitar.navigationOptions = {
        title: 'Trampo',
      }
      
      
      export default Visitar;
      
      
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
          flex:1,
          flexDirection: 'column',
          margin: 100,
          marginTop:100,
          width: 100,
          height:100,
          justifyContent:'space-between',
        },
        logo:{
          top:10,
          width: 300,
          height:300,
        },
        
      });
      
