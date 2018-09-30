import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';
import {Container} from "native-base";
import DatePicker from 'react-native-datepicker';

const Cadastro =({navigation}) => (
    

    <Container>
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
        </View>
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
        backgroundColor: '#95a5a6',
        paddingVertical: 15
    },
    buttonText:{
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight:'700'
    }


});