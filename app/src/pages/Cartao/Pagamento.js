import React from "react";
import { View, Text, TouchableOpacity, Modal, WebView, Image, StyleSheet } from "react-native";

export default class App extends React.Component {
    state = {
        showModal: false,
        status: "Pending"
    };
    handleResponse = data => {
        if (data.title === "successo") {
            this.setState({ showModal: false, status: "Complete" });
        } else if (data.title === "cancelamento") {
            this.setState({ showModal: false, status: "Cancelled" });
        } else {
            return;
        }
    };
    render() {
        return (
            <View style={{ marginTop: 100 }}>
                <Modal
                    visible={this.state.showModal}
                    onRequestClose={() => this.setState({ showModal: false })}
                >
                    <WebView
                        source={{ uri: "https://api-paypal-node-jonathan92.c9users.io/"}}
                        onNavigationStateChange={data =>
                            this.handleResponse(data)
                        }
                        injectedJavaScript={`document.f1.submit()`}
                    />
                </Modal>

                <View style={styles.viewPacote}>
                    <Text  style={styles.textoPacote}>Pacote destaque por 15 dias apenas R$ 10,00</Text>
                    
                    <TouchableOpacity 
                    style={{ width: 280, height: 50 }}
                    onPress={() => this.setState({ showModal: true })}
                >
                    <Image style={styles.buttonContainer}
                        style={{ width: 280, height: 50 }}
                        source={{ uri: 'https://www.sandbox.paypal.com/pt_BR/i/btn/btn_buynow_LG.gif' }} />

                </TouchableOpacity>
                <Text>Payment Status: {this.state.status}</Text>
                </View>

                
            </View>
        );
    }
}

const styles = StyleSheet.create({

    textoPacote:{
        color: '#000',
        fontSize: 20,
        
    },

    viewPacote:{
        
        justifyContent:'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: "row",
        
        justifyContent: 'center',
        alignItems: 'center',


    },
    imageBtn:{
        justifyContent:'center',
        alignItems: 'center',
    },


});
