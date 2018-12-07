import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View,FlatList,TouchableOpacity, Button,Alert, Image} from 'react-native';
import {Header, Container} from "native-base";
import ListaComponente from './ListaComponente';
import api from '../../services/api';
import ListarController from '../../services/ListarController';

import styled from 'styled-components';



const Content = styled.View`
  margin: 10px 0px;
`;

export default class Listar extends Component {

  static navigationOptions ={
    header: null
  };
  constructor(props) {
    super(props);
  }
  //toda vez que há variação de estado, o método render é executado
  state = {
    listaResults:[],
  };
  

  carregar = async () => {
    const params = this.props.navigation.state.params;
    /*const listaResults = await ListarController.filtroListar(
        params.filtro, 
        params.listaCategoria[0],
        params.distancia,
        params.avaliacao
        );    */
       
        const listaResults = await ListarController.ListarDemandas(
          params.distancia,
          params.checkSelected.toString(),
          ); 

        /*const listaResults = await ListarController.filtroListar(
          params.filtro,
          params.checkSelected.toString(),
          params.distancia,
          params.avaliacao
          );    */
          //alert(params.checkSelected[0].ID);
        //alert(listaResults)
         this.setState({ listaResults:listaResults });
  }

  componentDidMount() {
      this.carregar()
  }


  renderItem=({item}) =>(
    <View style={styles.anuncioContainer}>
      <Text style={styles.anuncioTitle}></Text>
      <Text style={styles.anuncioDescription}> teste </Text>


      <TouchableOpacity style={styles.anuncioButton}>
      
        <Text style={styles.anuncioButtonText}>Acessar </Text>
      </TouchableOpacity>
      
    </View>
  );

  enviarObjeto(item) {
    this.props.navigation.navigate('AnuncioDemanda', item);
  }
  

  render() {

    const params = this.props.navigation.state.params;

    

    return (
      
      <ScrollView style={{ backgroundColor: "gray"}}>
        <Content>
          {this.state.listaResults.map((value, index) => 
            <TouchableOpacity key={index} onPress={() => {this.enviarObjeto(value)}}>
              <ListaComponente  usuario={value}  />
            </TouchableOpacity>)}
        </Content>
      </ScrollView>

      // <View style={styles.container}>
      //   <FlatList
      //     contentContainerStyle={styles.list}
      //     //colocar os itens abaixo quando tiver trazendo dados da API
      //     //data={this.state.algumacoisa}
      //     //keyExtractor={item=>item._id}
      //     renderItem={this.renderItem}
      //     onEndReachedThreshold={0.1} //Qual é o percentual que quero chegar do fim da lista para começar a carregar os novos itens
      //   />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },

  list:{
    padding:20,
  },


  anuncioContainer:{
    backgroundColor:"#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius:5 ,
    padding:20,
    marginBottom:20,
  },

  anuncioTitle:{
    fontSize:18,
    fontWeight:"bold",
    color:"#999",
  },

  anuncioDescription:{
    fontSize:16,
    color:"#999",
    marginTop:5,
    lineHeight:24,
  },

  anuncioButton:{
    height:42,
    borderRadius:5,
    borderWidth:2,
    borderColor:"#DA552F",
    backgroundColor:"transparent",
    justifyContent:"center",
    alignItems:"center",
    marginTop:10,
  },

  anuncioButtonText:{
    fontSize:16,
    color:"#DAFF5F",
    fontWeight:"bold",
  },
  
});
