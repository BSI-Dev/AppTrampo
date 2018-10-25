import React from 'react';
import { ScrollView } from 'react-native';
import ListaComponente from './ListaComponente';
import styled from 'styled-components';

const usuarios = [
  {
    name: 'Bastião',
    avatarUrl: 'https://thumbs.dreamstime.com/b/pedreiro-54708865.jpg',
    description: 'Bastião é pedreiro, profissional, pode confiar.',
  },
  
];


const Content = styled.View`
  margin: 10px 0px;
`;

const Listar = () => (
  <ScrollView style={{ backgroundColor: "#b2bec3"}}>
    <Content>
      {usuarios.map((value, index) => <ListaComponente usuario={value} key={index} />)}
    </Content>
  </ScrollView>
);

export default Listar;