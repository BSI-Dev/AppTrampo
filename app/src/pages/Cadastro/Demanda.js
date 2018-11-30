import React, { Component } from 'react';
import { Modal, Image, Alert, Dimensions, StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Container, Accordion, List, ListItem, Body, Switch, Button, Textarea } from "native-base";
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
} from './styles';
import PessoaController from '../../services/PessoaController';

const window = Dimensions.get('window');
const quantidadePagina = 2;
const ListaTextoButton = ['Demanda', 'Imagens', 'Serviço', 'Salvar'];

export default class Demanda extends Component {

  static navigationOptions = {
    title: "Trampo",
    header: null
  };

  state = {
    listaCategoria: [],
    listaServico: [],
    view: 0,
    textoNext: ListaTextoButton[1],
    textoPrev: "",
    Titulo: "",
    Descricao: "",
    Habilitada: true,
    imageURL: 'https://reactnativecode.com/wp-content/uploads/2017/10/Guitar.jpg',
    newRealty: false,
    cameraModalOpened: false,
    dataModalOpened: false,
    images: []
  }

  componentDidMount() {
    this.load()
  }

  load = async () => {
    const listaCategoria = await PessoaController.ListarCategorias();
    this.setState({ listaCategoria: listaCategoria });
  }

  salvar() {

    Alert.alert("Cadastro realizado com sucesso");
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

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      console.log(data);
      this.setState({
        imageURL: data.uri
      });
    }
  }

  _renderContent(objs) {
    let lista = this.state.listaServico;
    return (<List>
      {objs.content.map((value, index) => (
        <ListItem key={index}>
          <TouchableOpacity onPress={() => { this.selecionarServico(value.ID) }}>
            <View style={lista.indexOf(value.ID) > -1 ? { backgroundColor: '#43d751', flex: 1 } : {}}>
              <Text>
                {value.Descricao}
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
      title.push({ title: lista[i].Descricao, content: lista })
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
      
      const { images } = this.state;
      this.setState({ images: [...images, data]})
    }
  }

  deletaImagem(index) {
    const { images } = this.state;
    images.splice(index, 1);
    this.setState({ images: [...images]})
  }

  renderImagesList = () => (
    this.state.images.length !== 0 ? (
      <ModalImagesListContainer>
        <ModalImagesList horizontal>
          { this.state.images.map((value, index) => (
            <View key={index}>
              <ModalImageItem  source={{ uri: value.uri }} resizeMode="stretch" />
              <DeleteButtonContainer onPress={ () => {this.deletaImagem(index)}}>
                <DeleteButtonText>
                    <Icon name="delete" size={20} />
                </DeleteButtonText>     
              </DeleteButtonContainer>              
            </View>
          ))}
        </ModalImagesList>
      </ModalImagesListContainer>
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
        { this.renderImagesList() }
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
              <Text style={styles.tituloText}>Informações da Demanda</Text>

              <View style={styles.inputContainer}>
                <Text style={styles.cadastroText}>Titulo</Text>
                <TextInput
                  placeholder=""
                  placeholderTextColor="rgba(0,0,0,1)"
                  returnKeyLabel="next"
                  onSubmitEditing={() => this.passwordInput.focus()}
                  autoCapitalize="words"
                  autoCorrect={false}
                  style={styles.input}
                  onChangeText={(text) => this.setState({ Titulo: text })}
                />
              </View>
              
              <View style={styles.inputContainer}>
                <Text style={styles.cadastroText}>Descrição</Text>
                <Textarea rowSpan={5} bordered 
                   style={styles.textarea}
                   onChangeText={(text) => this.setState({ Descricao: text })}
                />
              </View>
            
              <View style={styles.inputContainer}>
                <Text style={styles.cadastroText}>Habilitada</Text>
                <ListItem>
                  <Switch value={this.state.Habilitada}
                    onValueChange={(text) => this.setState({ Habilitada: text })}
                    thumbColor="#43d751"
                  />
                  <Body>
                    <Text style={styles.checkboxText}></Text>
                  </Body>
                </ListItem>
              </View>

            </View>

            <View style={this.state.view != 1 ? styles.hide : null}>
              <Text style={styles.tituloText}>
                Imagens
              </Text>
              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding:10,
              }}>
                <SelectButtonContainer onPress={this.handleCameraModalClose}>
                  <ButtonText>
                    <Icon name="camera" size={30} />
                  </ButtonText>
              </SelectButtonContainer>
              </View>
              
              { this.renderCameraModal() }
              { this.renderImagesList()}
             
            </View>

            <View style={this.state.view != 2 ? styles.hide : null}>
              <Text style={styles.tituloText}>Serviços da Demanda</Text>
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
  textarea: {
    marginLeft: 15,
    marginRight: 15,
    paddingHorizontal: 10,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#43d751',
    fontSize: 16,
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
  },
  logo: {
   // top: 10,
    width: 100,
    height: 100,
  },
});