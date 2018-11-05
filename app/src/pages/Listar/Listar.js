import React from 'react';
import { ScrollView } from 'react-native';
import ListaComponente from './ListaComponente';
import styled from 'styled-components';

const usuarios = [
  {
    name: 'Neimar',
    avatarUrl: 'https://thumbs.dreamstime.com/b/pedreiro-54708865.jpg',
    description: 'Jogador, PSG, atacante || meio de campo, camisa 10.',
  },
  {
    name: 'Giseli',
    avatarUrl: 'https://thumbs.dreamstime.com/b/pedreiro-54708865.jpg',
    description: 'Desenvolvedora, #vaicorinthians, serra.',
  },
  {
    name: 'Jonathan',
    avatarUrl: 'https://thumbs.dreamstime.com/b/pedreiro-54708865.jpg',
    description: 'Shinerai, viana, camisa 12.',
  },
  {
    name: 'Pedro',
    avatarUrl: 'https://thumbs.dreamstime.com/b/pedreiro-54708865.jpg',
    description: 'Enrolado, serra, Camisa 12.',
  },
];


const Content = styled.View`
  margin: 10px 0px;
`;

const Listar = () => (
  <ScrollView style={{ backgroundColor: "gray"}}>
    <Content>
      {usuarios.map((value, index) => <ListaComponente usuario={value} key={index} />)}
    </Content>
  </ScrollView>
);

export default Listar;