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

  //toda vez que há variação de estado, o método render é executado
  state = {
    listaDemandas:[],
    anuncioInfo:{}, //para guardar as informações do que é buscado da API ex.: Total de itens, páginas
    docs:[],
    page:1,
  };


  carregar = async () => {
    const listaDemandas = await ListarController.ListarDemandas();
    this.setState({ listaDemandas:listaDemandas });
  }

  componentDidMount() {
      this.carregar()
  }

  // componentDidMount(){
  //   this.loadAnuncios();
  // }
  // //utilizando arrowfunction para poder enxergar o 'this'
  // loadAnuncios = async (page = 1) => {
  //   const response = await api.get('/demandas'); //colocar o caminho a partir da baseUrl que é pra buscar os itens
  //   //const response = await api.get('/products?page=${page}');
    
  //   const {docs , ...anuncioInfo} = response.data;

  //   this.setState({
  //     docs : [...this.state.docs, ...docs],
  //     anuncioInfo, 
  //     page
  //   });
  // };

  // //para carregar os demais itens no scroll
  // loadMore = () => {
  //   const  {page, anuncioInfo} = this.state;

  //   if(page === anuncioInfo.pages) return;

  //   const pageNumber = page + 1;

  //   this.loadAnuncios(pageNumber);
  // };

  renderItem=({item}) =>(
    <View style={styles.anuncioContainer}>
      <Text style={styles.anuncioTitle}></Text>
      <Text style={styles.anuncioDescription}> teste </Text>


      <TouchableOpacity style={styles.anuncioButton}>
      
        <Text style={styles.anuncioButtonText}>Acessar </Text>
      </TouchableOpacity>
      
    </View>
  );

  teste(item) {
    this.props.navigation.navigate('AnuncioDemanda', item);
  }
  

  render() {
    return (
      <ScrollView style={{ backgroundColor: "gray"}}>
        <Content>
          {this.state.listaDemandas.map((value, index) => 
            <TouchableOpacity onPress={() => {this.teste(value)}}>
              <ListaComponente  usuario={value} key={index} />
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
