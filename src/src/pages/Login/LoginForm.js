import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';

export default class LoginForm extends Component {
    render(){
        return(
            <View style={StyleSheet.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <TextInput 
                placeholder="email"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyLabel = "next"
                onSubmitEditing={()=>this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                />
                <TextInput 
                placeholder="senha"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="go"
                secureTextEntry
                style={styles.input}
                ref={(input) => this.passwordInput = input}
                />


                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 20
    },
    input:{
        height: 40,
        backgroudColor: 'rgba(255,255,255,0.2)',
        marginBotton: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer:{
        backgroudColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText:{
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight:'700'
    }


});