import React, { Component } from 'react';
import { Image, Container, StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default class Login extends Component {

    static navigationOptions = {
        title: 'Trampo',
        header: null
    }

    state = {
        Email: "",
        Senha: "",
    }

    render() {
        return (

            <View style={{ backgroundColor: '#e4e6e4', flex: 1 }}>
                <View style={{ margin: 8, backgroundColor: '#FFF', flex: 1 }}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require('./../../assets/trampo.png')} />
                    </View>
                    <View>
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
                    </View>
                    <View>
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
                    </View>

                    <View style={styles.cadastroTextContent}>
                        <Text style={styles.naoTenhocadastroText}>Não tem cadastro? Faça seu cadastro</Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Cadastro'); }}>
                            <Text style={styles.buttonText}> aqui!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    logoContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        top: 10,
        width: 300,
        height: 300,
    },
    naoTenhocadastroText: {
        marginTop: 10,
        marginBottom: 4,
        color: '#8f8e93',
        fontSize: 16,
    },
    buttonText: {
        marginTop: 10,
        marginBottom: 4,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#43d751',
        alignItems: 'center',
    },
    cadastroText: {
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 4,
        color: '#8f8e93',
        fontSize: 14,
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
    cadastroTextContent: {
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16
    }

});