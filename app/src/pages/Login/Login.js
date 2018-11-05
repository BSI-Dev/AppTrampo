import React, {Component} from 'react';
import {StyleSheet, View, KeyboardAvoidingView, Text, Image, TouchableOpacity} from 'react-native';
import LoginForm from './LoginForm';

const Login =({navigation}) => (
   
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('./../../assets/trampo.png')}/>
        </View>
                    
        <LoginForm />
        <View style={styles.cadastroTextContent}>
            <Text style={styles.cadastroText}>Não tem cadastro? Faça seu cadastro </Text>
            <TouchableOpacity onPress={() => {navigation.navigate('Cadastro');}}>
                <Text style={styles.buttonText}>aqui!</Text>
            </TouchableOpacity>
        </View>
        
        
    </KeyboardAvoidingView>
);

export default Login;

Login.navigationOptions = {
    title: 'Trampo',
    header: null

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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        marginVertical:16
    },

    buttonText:{
        fontSize:16,
        fontWeight: 'bold',
        color:'black',
        textAlign:'center',
    }
    
});