import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import React, {Component} from 'react';
import {StyleSheet, View, Switch} from 'react-native';

export default class Cartao extends Component {
    state = { useLiteCreditCardInput: false };
  
    _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
    _onFocus = (field) => console.log("focusing", field);
    _setUseLiteCreditCardInput = (useLiteCreditCardInput) => this.setState({ useLiteCreditCardInput });
  
    render() {
      return (
        <View style={s.container}>
          
              <CreditCardInput
                autoFocus
                
                requiresName
                requiresCVC
                requiresPostalCode
  
                labelStyle={s.label}
                inputStyle={s.input}
                validColor={"black"}
                invalidColor={"red"}
                placeholderColor={"darkgray"}
  
                onFocus={this._onFocus}
                onChange={this._onChange} />
            
        </View>
      );
    }
  }




const s = StyleSheet.create({
    switch: {
      alignSelf: "center",
      marginTop: 20,
      marginBottom: 20,
    },
    container: {
      backgroundColor: "#F5F5F5",
      marginTop: 60,
    },
    label: {
      color: "black",
      fontSize: 12,
    },
    input: {
      fontSize: 16,
      color: "black",
    },
  });
  