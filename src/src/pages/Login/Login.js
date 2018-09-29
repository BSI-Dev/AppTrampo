import React, {Component} from 'react';
import {StyleSheet, View, KeyboardAvoidingView, Text, Image} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component{
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('./../../assets/trampo.png')}/>
                </View>
                          
                <LoginForm />
                <View style={styles.cadastroTextContent}>
                    <Text style={styles.cadastroText}>Não tem cadastro? Faça seu cadastro aqui.</Text>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

Login.navigationOptions = {
    title: 'Trampo',
  }


const styles = StyleSheet.create({
    container:{
        flex:1,
        
        backgroundColor: '#FFF',
        
    },
    logoContainer:{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        top:10,
        width: 300,
        height:300,
    },
    cadastroText:{
        color:'#000000',
        fontSize: 16,
        
    },
    cadastroTextContent:{
        flexGrow:1,
        alignItems: 'center',
        justifyContent:'flex-end',
        marginVertical:16
    }
    
});