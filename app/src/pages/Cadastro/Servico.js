import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView, StatusBar} from 'react-native';
import {Container, Radio} from "native-base";
import { CheckBox } from 'react-native-elements';
import CadastroController from '../../services/CadastroController';

export default class Servico extends Component{
    static navigationOptions ={
        title:"Trampo",
        header: null
    };

    state = {
        listaServico: []
    }

    carregar = async () => {
        const listaServico = await CadastroController.ListarServico();
        this.setState({ listaServico:listaServico });
    }

    componentDidMount() {
        this.carregar()
    }

    render(){
        return(
            <Container>
            <ScrollView>
            
                <View  style={styles.inputContainer}>
                    <Text style={styles.cadastroText}>Serviços</Text>
                    {this.state.listaServico.map((value, index) => ( <ListItem>
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