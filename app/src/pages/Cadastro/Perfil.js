import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

class Perfil extends Component {
  render () {
    return (
      <View style={styles.container}>
  <Text style={styles.text}>Tela Perfil</Text>
      </View>
      )
  }
}

export default Perfil

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
