import React, {Component} from 'react';
import {CheckBox, SearchBar} from 'react-native-elements';
import {View, TouchableOpacity,Text,StyleSheet,Slider,FlatList} from 'react-native';
import { Container, Left } from 'native-base';
import  RadioForm from 'react-native-simple-radio-button';

var radio_props = [
    {label: 'Serviço', value: 0 },
    {label: 'Demanda', value: 1 }
  ];


export default class Buscar extends Component{
    static navigationOptions ={
        title:"Trampo"
    };

    state={
        distancia: 1,
        avaliacao: 1
    };

    renderBuscaAvancada(){
        return(
        <View>
            <FlatList            
            />
        </View>
        )
    };

    render(){
        return(
            <Container>
            
                <SearchBar placeholder='Buscar ...' />
                
                    <TouchableOpacity style={styles.buscaAvancada} onPress={this.renderBuscaAvancada}>
                        <Text style={styles.buttonTextAvancada}>Busca Avançada</Text>
                    </TouchableOpacity>
                    
                    <Slider
                        minimumValue={1}
                        maximumValue={50}
                        value={this.state.distancia}
                        onValueChange={value => this.setState({distancia:value})}
                    />
                    <View style={styles.viewTextSlider}> 
                    <Text style={styles.textSlider}>Distância</Text>
                    <Text style={styles.textSlider}>{this.state.distancia} km</Text>
                    </View>

                    <Slider
                        minimumValue={1}
                        maximumValue={5}
                        value={this.state.avaliacao}
                        onValueChange={value => this.setState({avaliacao:value})}
                    />
                    <View style={styles.viewTextSlider}> 
                    <Text style={styles.textSlider}>Avaliação</Text>
                    <Text style={styles.textSlider}>{this.state.avaliacao} pontos</Text>
                    </View>

                    <View> 
                        <Text style={styles.viewTextFiltro}>Filtrar Por</Text>

                        <View  style={styles.viewFiltro}>
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
                        

                    </View>

                     


                    <TouchableOpacity style={styles.buttonContainer} onPress={() => {this.props.navigation.navigate('Listar1');}}>
                        <Text style={styles.buttonText}>Filtrar</Text>
                    </TouchableOpacity>                  
            
            </Container>

        );
    }

};

const styles = StyleSheet.create({

    buttonTextAvancada:{
        fontSize:16,
        fontWeight: 'bold',
        color:'black',
        textAlign:'center',
        padding:5,
    },
    buscaAvancada:{
        alignItems: 'flex-start'
    },
    textSlider:{
        fontSize:16,
        color:"#0D0A0A",
        paddingLeft:25,
        padding:5
    },
    viewTextSlider:{
        flexDirection: "row",
        justifyContent:"space-between" 
    },

    viewTextFiltro:{
        padding:10
    },

    viewFiltro:{
        flexDirection: "row",
        padding:10
        //justifyContent:"space-between" 
    },

    buttonContainer:{
        backgroundColor: '#95a5a6',
        paddingVertical: 10,
        borderRadius: 10,
        
    },
    buttonContainerFiltrar:{
        backgroundColor: '#95a5a6',
        paddingVertical: 10,
        borderRadius: 10,
        width: '40%',
        padding: 10,
    },
    buttonText:{
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight:'700',
        fontSize:20
    }

});
