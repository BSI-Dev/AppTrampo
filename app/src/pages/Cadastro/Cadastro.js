import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Container, Accordion, List, ListItem, Body, Picker,  Switch, Button } from "native-base";
import { Modal, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RNCamera } from 'react-native-camera';
import {
    DeleteButtonText,
    AnnotationContainer,
    AnnotationText,
    NewButtonContainer,
    ButtonsWrapper,
    CancelButtonContainer,
    SelectButtonContainer,
    ButtonText,
    Marker,
    ModalContainer,
    ModalImagesListContainer,
    ModalImagesList,
    ModalImageItem,
    ModalButtons,
    CameraButtonContainer,
    DeleteButtonContainer,
    CancelButtonText,
    ContinueButtonText,
    TakePictureButtonContainer,
    TakePictureButtonLabel,
    ModalImagePerfil,
  } from './styles';

import DatePicker from 'react-native-datepicker';
import PessoaController from '../../services/PessoaController';

const window = Dimensions.get('window');
const quantidadePagina = 4;
const ListaTextoButton = ['Perfil', 'Foto', 'Serviço', 'Endereço', 'Login', 'Salvar'];

export default class Cadastro extends Component {

    static navigationOptions = {
        title: "Trampo",
        header: null
    };

    state = {
        listaCategoria: [],
        listaEstado: [],
        listaCidade: [],
        listaServico: [],
        view: 0,
        textoNext: ListaTextoButton[1],
        textoPrev: "",
        Nome: "",
        Sexo: "",
        DataNascimento: new Date(),
        CPF: "",
        PerfilCliente: false,
        PerfilPrestador: false,
        UF: "",
        Cidade: "",
        Bairro: "",
        Numero: "",
        Email: "",
        Senha: "",
        ConfirmarSenha: "",
        cameraModalOpened: false,
        dataModalOpened: false,
        imagem: null
    }

    componentDidMount() {
        this.load()
    }

    buscarCidades(value) {
        this.setState({ UF: value });
        this.listarCidades(value);
    }

    listarCidades = async (value) => {
        const listaCidade = await PessoaController.ListarCidades(value);
        this.setState({
            listaCidade: listaCidade
        });
    }

    load = async () => {
        const listaCategoria = await PessoaController.ListarCategorias();
        this.setState({ listaCategoria: listaCategoria });
        const listaEstado = await PessoaController.ListarEstados();

        this.setState({ listaEstado: listaEstado });
    }

    salvar() {

        Alert.alert("Cadastro realizado com sucesso");
        let Pessoa = {
            Nome: this.state.Nome,
            Sexo: this.state.Nome,
            Email: this.state.Email,
            DataNascimento: this.state.DataNascimento,
            CPF: this.state.CPF,
            UF: this.state.UF,
            Cidade: this.state.Cidade,
            Bairro: this.state.Bairro,
            Numero: this.state.Numero,
            Email: this.state.Email,
            Senha: this.state.Senha
        };

        PessoaController.Salvar(Pessoa);
    }

    viewShow(p) {
        let view = this.state.view + p;

        if (view > quantidadePagina) {
            view = quantidadePagina;
            this.salvar();
        }
        if (view < 0) {
            view = 0
        }
        this.setState({
            view: view,
            textoNext: ListaTextoButton[view + 1],
            textoPrev: ListaTextoButton[view - 1]
        });
    }

    viewNext() {
        return null;//this.state.view == quantidadePagina ? styles.hide: null;
    }

    viewPrev() {
        return this.state.view == 0 ? styles.hide : null;
    }

    selecionarServico(id) {
        let lista = this.state.listaServico;

        let index = lista.indexOf(id, 0);
        if (index > -1) {
            lista.splice(index, 1);
        } else {
            lista.push(id)
        }
        this.setState({ ListaServico: lista });
    }


    _renderContent(objs) {
        let lista = this.state.listaServico;
        return (<List>
            {objs.content.map((value, index) => (
                <ListItem key={index}>
                    <TouchableOpacity onPress={() => { this.selecionarServico(value.ID) }}>
                        <View style={lista.indexOf(value.ID) > -1 ? { backgroundColor: '#43d751', flex: 1 } : {}}>
                            <Text>
                                {value.Nome}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </ListItem>
            ))}
        </List>
        );
    }

    getCategorias() {
        let lista = this.state.listaCategoria;
        let title = [];
        for (let i = 0; i < lista.length; i++) {
            title.push({ title: lista[i].Descricao, content: lista[i].Servicos })
        }
        return title
    }

    handleCameraModalClose = () => this.setState({ cameraModalOpened: !this.state.cameraModalOpened })

    handleDataModalClose = () => this.setState({
        dataModalOpened: !this.state.dataModalOpened,
        cameraModalOpened: false,
    })

    handleTakePicture = async () => {

        //if (this.camera) {
        {
            const options = { quality: 0.5, base64: true, forceUpOrientation: true, fixOrientation: true, };
            const data = await this.camera.takePictureAsync(options)

            this.setState({ imagem: data })
        }
        this.handleDataModalClose();
    }

    deletaImagem() {
        let imagem = this.state.imagem;
        this.setState({ imagem: null })
    }

    renderImagemPefil = () => (
        this.state.imagem !== null ? (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding:10,
            }}>
                 <View>
                    <ModalImagePerfil borderRadius={40} source={{ uri: this.state.imagem.uri }} resizeMode="stretch" />
                </View>
                <DeleteButtonContainer onPress={() => { this.deletaImagem() }}>
                    <DeleteButtonText>
                        <Icon name="delete" size={20} />
                    </DeleteButtonText>
                </DeleteButtonContainer>
            </View>
        ) : null
    )

    renderCameraModal = () => (
        <Modal
            visible={this.state.cameraModalOpened}
            transparent={false}
            animationType="slide"
            onRequestClose={this.handleCameraModalClose}
        >
            <ModalContainer>
                <ModalContainer>
                    <RNCamera
                        ref={camera => {
                            this.camera = camera;
                        }}
                        style={{ flex: 1 }}
                        type={RNCamera.Constants.Type.back}
                        autoFocus={RNCamera.Constants.AutoFocus.on}
                        flashMode={RNCamera.Constants.FlashMode.off}
                        permissionDialogTitle={"Permission to use camera"}
                        permissionDialogMessage={
                            "We need your permission to use your camera phone"
                        }
                    />
                    <TakePictureButtonContainer onPress={this.handleTakePicture}>
                        <TakePictureButtonLabel />
                    </TakePictureButtonContainer>
                </ModalContainer>
                <ModalButtons>
                    <CameraButtonContainer onPress={this.handleCameraModalClose}>
                        <CancelButtonText>Cancelar</CancelButtonText>
                    </CameraButtonContainer>
                    <CameraButtonContainer onPress={this.handleDataModalClose}>
                        <ContinueButtonText>Continuar</ContinueButtonText>
                    </CameraButtonContainer>
                </ModalButtons>
            </ModalContainer>
        </Modal>
    )

    render() {
        return (
            <Container>

                <View style={{ backgroundColor: '#e4e6e4', flex: 1 }}>
                    <View style={{ margin: 8, backgroundColor: '#FFF', flex: 1 }}>

                        <View style={this.state.view != 0 ? styles.hide : null}>
                            <Text style={styles.tituloText}>Informações do Perfil</Text>

                            <View style={styles.inputContainer}>
                                <Text style={styles.cadastroText}>Nome</Text>
                                <TextInput
                                    placeholder=""
                                    placeholderTextColor="rgba(0,0,0,1)"
                                    returnKeyLabel="next"
                                    onSubmitEditing={() => this.passwordInput.focus()}
                                    autoCapitalize="words"
                                    autoCorrect={false}
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({ Nome: text })}
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <Text style={styles.cadastroText}>Sexo</Text>
                                <Picker style={styles.select}
                                    selectedValue={this.state.Sexo}
                                    mode="dropdown"
                                    buscarCidades={(text) => this.setState({ Sexo: text })}
                                >
                                    <Picker.Item label="" value="" />
                                    <Picker.Item label="Feminino" value="1" />
                                    <Picker.Item label="Masculino" value="2" />
                                </Picker>
                            </View>

                            <View style={styles.inputContainer}>
                                <Text style={styles.cadastroText}>Data de Nascimento</Text>
                                <DatePicker

                                    style={styles.datePicker}
                                    date={this.state.DataNascimento}
                                    mode="date"
                                    placeholder=""
                                    format="DD/MM/YYYY"
                                    customStyles={
                                        {
                                            dateIcon: {
                                            },
                                            dateInput: {
                                                borderWidth: 0,
                                                alignItems: 'flex-start',
                                            }
                                        }
                                    }
                                    onDateChange={(text) => this.setState({ DataNascimento: text })}
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <Text style={styles.cadastroText}>CPF</Text>
                                <TextInput
                                    placeholder=""
                                    placeholderTextColor="rgba(0,0,0,1)"
                                    returnKeyLabel="next"
                                    onSubmitEditing={() => this.passwordInput.focus()}
                                    autoCapitalize="words"
                                    autoCorrect={false}
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({ CPF: text })}
                                />
                            </View>


                            <View style={styles.inputContainer}>
                                <Text style={styles.cadastroText}>Perfil</Text>
                                <ListItem>
                                    <Switch value={this.state.PerfilCliente}
                                        buscarCidades={(text) => this.setState({ PerfilCliente: text })}
                                        thumbColor="#43d751"
                                    />
                                    <Body>
                                        <Text style={styles.checkboxText}>Cliente</Text>
                                    </Body>
                                </ListItem>
                                <ListItem >
                                    <Switch value={this.state.PerfilPrestador}
                                        buscarCidades={(text) => this.setState({ PerfilPrestador: text })}
                                        thumbColor="#43d751"
                                    />
                                    <Body>
                                        <Text style={styles.checkboxText}>Prestador</Text>
                                    </Body>
                                </ListItem>
                            </View>

                        </View>

                        
                        <View style={this.state.view != 1 ? styles.hide : null}>
                            <Text style={styles.tituloText}>Foto Perfil</Text>
                            <View style={styles.inputContainer} style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding:10,
                            }}>
                                
                                {this.renderCameraModal()}
                                {this.renderImagemPefil()}

                                <SelectButtonContainer onPress={this.handleCameraModalClose}>
                                    <ButtonText>
                                        <Icon name="camera" size={30} />
                                    </ButtonText>
                                </SelectButtonContainer>
                            </View>
                        </View>


                        <View style={this.state.view != 2 ? styles.hide : null}>
                            <Text style={styles.tituloText}>Serviços Prestados</Text>
                            <View style={styles.inputContainer}>
                                <Text style={styles.cadastroText}></Text>
                                <Accordion
                                    dataArray={this.getCategorias()}
                                    headerStyle={{
                                        color: "#43d751",
                                        borderColor: "#43d751",
                                        borderBottomWidth: 2
                                    }}
                                    renderContent={this._renderContent.bind(this)}
                                />
                            </View>
                        </View>

                        <View style={this.state.view != 3 ? styles.hide : null}>
                            <Text style={styles.tituloText}>Endereço</Text>
                            <View style={styles.inputContainer}>
                                <Text style={styles.cadastroText}>UF</Text>
                                <Picker style={styles.select}
                                    selectedValue={this.state.UF}
                                    mode="dropdown"
                                    buscarCidades={this.buscarCidades.bind(this)}
                                >
                                    {this.state.listaEstado.map((value, index) => (<Picker.Item key={index} label={value.Nome} value={value.ID} />))}
                                </Picker>
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={styles.cadastroText}>Cidade</Text>
                                <Picker style={styles.select}
                                    selectedValue={this.state.Cidade}
                                    mode="dropdown"
                                    buscarCidades={(text) => this.setState({ Cidade: text })}
                                >
                                    {this.state.listaCidade.map((value, index) => (<Picker.Item key={index} label={value.Nome} value={value.ID} />))}
                                </Picker>
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={styles.cadastroText}>Bairro</Text>
                                <TextInput
                                    placeholder=""
                                    placeholderTextColor="rgba(0,0,0,1)"
                                    returnKeyLabel="next"
                                    onSubmitEditing={() => this.passwordInput.focus()}
                                    autoCapitalize="words"
                                    autoCorrect={false}
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({ Bairro: text })}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={styles.cadastroText}>Número</Text>
                                <TextInput
                                    placeholder=""
                                    placeholderTextColor="rgba(0,0,0,1)"
                                    returnKeyLabel="next"
                                    onSubmitEditing={() => this.passwordInput.focus()}
                                    autoCapitalize="words"
                                    autoCorrect={false}
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({ Numero: text })}
                                />
                            </View>

                        </View>

                        <View style={this.state.view != 4 ? styles.hide : {}}>
                            <Text style={styles.tituloText}>Login</Text>
                            <View style={styles.inputContainer}>
                                <Text style={styles.cadastroText}>E-mail</Text>
                                <TextInput
                                    placeholder=""
                                    placeholderTextColor="rgba(0,0,0,1)"
                                    returnKeyLabel="next"
                                    onSubmitEditing={() => this.passwordInput.focus()}
                                    autoCapitalize="words"
                                    autoCorrect={false}
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({ Email: text })}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={styles.cadastroText}>Senha</Text>
                                <TextInput
                                    placeholder=""
                                    placeholderTextColor="rgba(0,0,0,1)"
                                    returnKeyLabel="next"
                                    onSubmitEditing={() => this.passwordInput.focus()}
                                    autoCapitalize="words"
                                    autoCorrect={false}
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({ Senha: text })}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={styles.cadastroText}>Confirmar Senha</Text>
                                <TextInput
                                    placeholder=""
                                    placeholderTextColor="rgba(0,0,0,1)"
                                    returnKeyLabel="next"
                                    onSubmitEditing={() => this.passwordInput.focus()}
                                    autoCapitalize="words"
                                    autoCorrect={false}
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({ ConfirmarSenha: text })}
                                />
                            </View>
                        </View>

                        <View style={styles.botaoStepView}>
                            <Button iconLeft
                                onPress={() => { this.viewShow(-1) }}
                                style={[styles.stepButton, this.viewPrev()]}
                            >
                                <Text style={styles.stepText}>{this.state.textoPrev}</Text>
                            </Button>
                            <Button iconRight
                                onPress={() => { this.viewShow(1) }}
                                style={[styles.stepButton, this.viewNext()]}
                            >
                                <Text style={styles.stepText}>{this.state.textoNext}</Text>
                            </Button>
                        </View>
                    </View>
                </View>



            </Container>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    botaoStepView: {
        flexDirection: "row",
        flex: 1,
        left: 0,
        right: 0,
        justifyContent: 'space-between',
        padding: 15
    },
    hide: {
        top: window.height,
        bottom: -window.height,
        height: 0,
        width: 0,
    },
    stepText: {
        color: '#FFF',
        width: 80,
        textAlign: 'center'
    },
    stepButton: {
        backgroundColor: '#43d751',
        padding: 8,
        borderRadius: 3,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end'
    },
    cadastroText: {
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 4,
        color: '#8f8e93',
        fontSize: 14,
    },
    tituloText: {
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 4,
        paddingBottom: 10,
        color: '#000',
        fontWeight: 'bold',
        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#43d751'
    },
    checkboxText: {
        marginLeft: 15,
        fontSize: 16,
    },
    inputContainer: {
        // padding:5
    },
    datePicker: {
        marginLeft: 15,
        marginRight: 15,
        paddingHorizontal: 10,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#43d751',
        width: '91%',
    },
    input: {
        marginLeft: 15,
        marginRight: 15,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#43d751',
        fontSize: 16,
    },
    select: {
        marginLeft: 15,
        marginRight: 15,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#43d751',
        //borderBottomWidth:5
    },
    buttonContainer: {
        backgroundColor: '#0d9312',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    },
    textCategoria: {
        color: '#000'
    },
    perfil: {
        color: '#689F38',
    }


});