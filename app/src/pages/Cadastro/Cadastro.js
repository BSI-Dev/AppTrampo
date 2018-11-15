import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView, StatusBar} from 'react-native';
import {Container, Radio, ListItem,Body } from "native-base";
import DatePicker from 'react-native-datepicker';
import  RadioForm from 'react-native-simple-radio-button';
import { CheckBox } from 'react-native-elements';
//import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import CadastroController from '../../services/CadastroController';

var radio_props = [
    {label: 'Cliente', value: 0 },
    {label: 'Prestador', value: 1 }
  ];

export default class Cadastro extends Component{
    static navigationOptions ={
        title:"Trampo",
        header: null
    };

    
    state = {
        listaCategoria: []
    }

    carregar = async () => {
        const listaCategoria = await CadastroController.ListarCategoria();
        this.setState({ listaCategoria:listaCategoria });
    }

    componentDidMount() {
        this.carregar()
    }

    validate(){
        
    }

    render(){
        return(
            <Container>
            <ScrollView>
            <View style={styles.inputContainer}>
                <Text style={styles.cadastroText}>Nome</Text>
                <TextInput
                    placeholder=""
                    placeholderTextColor="rgba(0,0,0,1)"
                    returnKeyLabel = "next"
                    onSubmitEditing={()=>this.passwordInput.focus()}
                    autoCapitalize="words"
                    autoCorrect={false}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.cadastroText}>E-mail</Text>
                <TextInput
                    placeholder=""
                    placeholderTextColor="rgba(0,0,0,1)"
                    returnKeyLabel = "next"
                    onSubmitEditing={()=>this.passwordInput.focus()}
                    autoCapitalize="words"
                    autoCorrect={false}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.cadastroText}>Data de Nascimento</Text>
                <DatePicker
                    style={styles.datePicker}
                    mode="date"
                    placeholder=""
                    format="DD/MM/YYYY"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        //position: 'absolute',
                        //left: 0,
                      //  top: 4,
                     //   marginLeft: 0
                    },
                    dateInput: {
                        borderWidth: 0, 
                   //     marginLeft: 36
                    }
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />
            </View>
            
            <View style={styles.inputContainer}>
                <Text style={styles.cadastroText}>CPF</Text>
                <TextInput
                        placeholder=""
                        placeholderTextColor="rgba(0,0,0,1)"
                        returnKeyLabel = "next"
                        onSubmitEditing={()=>this.passwordInput.focus()}
                        autoCapitalize="words"
                        autoCorrect={false}
                        style={styles.input}
                    />  
            </View>    
            
            
            <View  style={styles.inputContainer}>
                <Text style={styles.cadastroText}>Perfil</Text>
                <CheckBox title='Cliente' />
                <CheckBox title='Prestador'/>
            </View>
 
            <View  style={styles.inputContainer}>
                <Text style={styles.cadastroText}>Categoria</Text>
                {/*<TouchableOpacity onPress={() => {this.props.navigation.navigate('Servico');}}>
                    <Text >serviços</Text>
                </TouchableOpacity>*/}
                {this.state.listaCategoria.map((value, index) => ( <ListItem key={index}>
                    <CheckBox checked={false} color="green"/>
                    <Body>
                        <Text>{value.Descricao}</Text>
                    </Body>
                </ListItem>))}
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
    cadastroText: {
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        color:'#689F38',
        fontSize: 16,
    },
    inputContainer:{
        // padding:5
    },
    datePicker:{
        marginLeft: 15,
        marginRight: 15,
       // color: '#000000',
        paddingHorizontal: 10,
        borderRadius:5,
        borderWidth: 1,
        borderColor: '#689F38',
        color: '#FFFFFF',
        fontSize:16,
        width:'92%',
        
    },
    input:{
        marginLeft: 15,
        marginRight: 15,
        height: 40,
        //backgroundColor: '#689F38',
        //margin: 10,
        color: '#000000',
        paddingHorizontal: 10,
        borderRadius:5,
        borderWidth: 1,
        borderColor: '#689F38',
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