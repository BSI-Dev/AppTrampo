import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Description = styled.Text`
  font-size: 12;
  text-align: justify;
`;

const Actions = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  max-height: 60px;
  max-width: 60px;
`;

const DescriptionContainer = styled.View`
  flex: 1;
  max-height: 60px;
  overflow: hidden;
  align-self: stretch;
  margin: 0px 10px;
`;

const Avatar = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 5px;
`;

const Card = styled.View`
  flex: 1;
  align-content: flex-start;
  align-self: stretch;
  align-items: center;
  margin: 5px 10px 5px 10px;
  background-color: white;
  elevation: 2px;
  border-radius: 2px;
`;

const CardHeader = styled.View`
  flex: 1;
  align-self: stretch;
  margin: 20px 5px 5px 5px;
  
`;

const HeaderText = styled.Text`
  font-size: 15;
  margin: 0px 5px;
`;

const CardBody = styled.View`
  flex: 1;
  border-top-width: 1px;
  border-top-color: #E9E9E9;
  background-color: #F8F8F8;
  align-self: stretch;
`;

const BodyContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;


class ListaComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            clicked: false,
        };
    }


    render(){
        const { clicked } = this.state;
        const { usuario } = this.props;


        return(
            <Card>
                <CardHeader>
                    <HeaderText>
                        {usuario.ID} {usuario.Titulo}
                    </HeaderText>
                </CardHeader>

                <CardBody>
                    <BodyContainer>
                        <Avatar source ={{uri: usuario.avatarUrl}}/>

                        <DescriptionContainer>
                            <Description>
                                {usuario.Descricao}
                            </Description>
                        </DescriptionContainer>

                        <Actions>
                            <TouchableOpacity onPress={() => this.setState({clicked : !clicked})}>
                                {
                                    clicked
                                    ? <Icon name="minus-box-outline"   size={20} color="#000" />
                                    : <Icon name="plus-box"   size={20} color="#000" />
                                }
                            </TouchableOpacity>
                        </Actions>

                    </BodyContainer>
                </CardBody>

            </Card>
        );

    }
}

ListaComponent.propTypes = {
    usuario: PropTypes.shape({
        ID : PropTypes.number.isRequired,
        Titulo: PropTypes.string.isRequired,
        description: PropTypes.string,
        Descricao: PropTypes.string,
    }).isRequired,
};

export default ListaComponent;