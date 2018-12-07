import React, { Component } from 'react';
import { CheckBox, SearchBar } from 'react-native-elements';
import { View, TouchableOpacity, Text, StyleSheet, Slider, FlatList } from 'react-native';
import { Container, ListItem, Body } from 'native-base';
import RadioForm from 'react-native-simple-radio-button';

import BuscaController from '../../services/BuscaController';

import MyCheckBox from '../UtilComponentes/MyCheckBox';


var radio_props = [
    { label: 'Serviço', value: 0 },
    { label: 'Demanda', value: 1 }
];


export default class Buscar extends Component {
    static navigationOptions = {
        title: "Trampo"
    };

    state = {
        distancia: 1,
        avaliacao: 1,
        listaCategoria: [],
        filtro: 0,
        lstCategoriasEscolhidas: [],
        checkSelected: [],
    };


    toggleCheckBox = (id, isCheck) => {
        let checkSelected = this.state.checkSelected;
        if (isCheck) {
            checkSelected.push(id);
        } else { // remove element
            var index = checkSelected.indexOf(id);
            if (index > -1) {
                checkSelected.splice(index, 1);
            }
        }

        this.setState({ checkSelected: checkSelected });
    }


    carregar = async () => {
        const listaCategoria = await BuscaController.ListarCategoria();
        this.setState({ listaCategoria: listaCategoria });
    }

    componentDidMount() {
        this.carregar()
    }



    render() {
        return (

            <Container>

                <SearchBar placeholder='Buscar ...' />

                <View>
                    <Text style={styles.viewTextFiltro}>Filtrar Por</Text>

                    <View style={styles.viewFiltro}>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={(value) => {
                                this.setState({ value: value });
                                this.setState({ filtro: value })
                            }}
                            circleSize={5}
                            buttonColor={'#009624'}
                            selectedButtonColor={"#009624"}
                            buttonInnerColor={'#009624'}
                            buttonSize={10}
                            buttonOuterSize={20}
                        />

                    </View>


                </View>

                <View style={styles.boxSlides}>

                    <Slider
                        minimumValue={1}
                        maximumValue={50}
                        value={this.state.distancia}
                        onValueChange={value => this.setState({ distancia: value })}
                    />
                    <View style={styles.viewTextSlider}>
                        <Text style={styles.textSlider}>Distância</Text>
                        <Text style={styles.textSlider}>{this.state.distancia.toFixed(1)} km</Text>
                    </View>

                    <Slider
                        minimumValue={1}
                        maximumValue={5}
                        value={this.state.avaliacao}
                        onValueChange={value => this.setState({ avaliacao: value })}
                    />
                    <View style={styles.viewTextSlider}>
                        <Text style={styles.textSlider}>Avaliação</Text>
                        <Text style={styles.textSlider}>{this.state.avaliacao.toFixed(2)} pontos</Text>
                    </View>
                </View>



                <View>
                    <Text style={styles.viewTextFiltro}>Categoria</Text>

                    <View style={styles.filtroText}>
                        {this.state.listaCategoria.map((value, index) => (<ListItem key={index}>
                            <MyCheckBox myIndex={value.ID} myPress={(index, checked) => { this.toggleCheckBox(index, checked) }} checked={this.state.checked} color="green" />
                            <Body>
                                <Text style={styles.categoriaText}>{value.Descricao}</Text>
                            </Body>
                        </ListItem>))}

                    </View>


                </View>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => { this.props.navigation.navigate('Listar1', this.state); }}>
                    <Text style={styles.buttonText}>Filtrar</Text>
                </TouchableOpacity>

            </Container>

        );
    }

};

const styles = StyleSheet.create({

    buttonTextAvancada: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        padding: 5,
    },
    buscaAvancada: {
        alignItems: 'flex-start'
    },
    textSlider: {
        fontSize: 16,
        color: "#0D0A0A",
        paddingLeft: 25,
        padding: 5
    },
    viewTextSlider: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    viewTextFiltro: {
        padding: 10
    },

    viewFiltro: {
        flexDirection: "row",
        padding: 10
        //justifyContent:"space-between" 
    },

    buttonContainer: {
        backgroundColor: '#95a5a6',
        paddingVertical: 10,
        borderRadius: 10,

    },
    buttonContainerFiltrar: {
        backgroundColor: '#95a5a6',
        paddingVertical: 10,
        borderRadius: 10,
        width: '40%',
        padding: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 20
    },
    boxSlides: {

        padding: 10
    },

    filtroText: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        color: '#000',
        fontSize: 20,
    },

    categoriaText: {
        paddingLeft: 10,
        color: '#000',
    }

});
