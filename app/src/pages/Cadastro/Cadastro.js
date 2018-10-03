import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView, StatusBar} from 'react-native';
import {Container, Radio} from "native-base";
import DatePicker from 'react-native-datepicker';
import  RadioForm from 'react-native-simple-radio-button';
import { CheckBox } from 'react-native-elements';

var radio_props = [
    {label: 'Cliente', value: 0 },
    {label: 'Prestador', value: 1 }
  ];


const Cadastro =({navigation}) => (
    
    
    <Container>
        <ScrollView>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Nome"
                placeholderTextColor="rgba(0,0,0,1)"
                returnKeyLabel = "next"
                onSubmitEditing={()=>this.passwordInput.focus()}
                autoCapitalize="words"
                autoCorrect={false}
                style={styles.input}
            />
        </View>
        <View style={styles.inputContainer}>
            <DatePicker
                style={{width: 200}}
                //date={this.state.date}
                mode="date"
                placeholder="Data de Nascimento"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                }}
                //onDateChange={(date) => {this.setState({date: date})}}
            />
            
        </View>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Endereço"
                placeholderTextColor="rgba(0,0,0,1)"
                returnKeyLabel = "next"
                onSubmitEditing={()=>this.passwordInput.focus()}
                autoCapitalize="words"
                autoCorrect={false}
                style={styles.input}
            />  
        </View>
        <View style={styles.inputContainer}>
            <TextInput
                    placeholder="CPF"
                    placeholderTextColor="rgba(0,0,0,1)"
                    returnKeyLabel = "next"
                    onSubmitEditing={()=>this.passwordInput.focus()}
                    autoCapitalize="words"
                    autoCorrect={false}
                    style={styles.input}
                />  
        </View>
        <View  style={styles.inputContainer}>
            <RadioForm
                radio_props={radio_props}
                initial={0}
                onPress={(value) => {this.setState({value:value})}}
                circleSize = {5}
                outerColor = {"#0d9312"}
            />
        </View>
        <View  style={styles.inputContainer}>
                <Text style={styles.textCategoria}>Categoria</Text>
            <CheckBox
                title='eletricista'
                
                // checked={this.state.checked}
            />
            <CheckBox
                title='pedreiro'
               
                // checked={this.state.checked}
            />
            <CheckBox
                title='Click Here'
                
                // checked={this.state.checked}
            />
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>

        </ScrollView>
    </Container>
);

Cadastro.navigationOptions = {
    title: 'Trampo',
  }
  
export default Cadastro;


const styles = StyleSheet.create({
    container:{
        padding: 20
    },
    inputContainer:{
        padding:10
    },

    input:{
        height: 40,
        backgroundColor: '#95a5a6',
        marginBottom: 10,
        color: '#000000',
        paddingHorizontal: 10,
        borderRadius:25,
        color: '#FFFFFF',
        fontSize:16,
    },
    buttonContainer:{
        backgroundColor: '#0d9312',
        paddingVertical: 15
    },
    buttonText:{
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight:'700'
    },
    textCategoria:{
        color:'#000'
    }


});