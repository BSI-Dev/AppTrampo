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

this.state ={
    date:"01-01-2001"
}

export default class Cadastro extends Component{
    static navigationOptions ={
        title:"Trampo",
        header: null
    };

    validate(){
        
    }

    render(){
        return(
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
                    style={styles.datePicker}
                    
                    mode="date"
                    placeholder="Data de Nascimento"
                    format="DD-MM-YYYY"
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
                    onDateChange={(date) => {this.setState({date: date})}}
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
            <View  style={styles.inputContainerRadio}>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    onPress={(value) => {this.setState({value:value})}}
                    circleSize = {5}
                    buttonColor={'#009624'}
                    selectedButtonColor = {"#009624"}
                    buttonInnerColor={'#009624'}
                    buttonSize={10}
                    buttonOuterSize={20}
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
    }
}
    
    
    


  



const styles = StyleSheet.create({
    container:{
        padding: 20
    },
    inputContainer:{
        padding:5
    },
    inputContainerRadio:{
        padding:10,
        marginLeft: 20
    },
    datePicker:{
        margin: 10,
        width:300,
        
    },

    input:{
        height: 40,
        backgroundColor: '#689F38',
        margin: 15,
        color: '#000000',
        paddingHorizontal: 10,
        borderRadius:5,
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
    },
    perfil:{
        color:'#689F38',
    }


});