import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

class Demanda extends Component {
  render () {
    return (
      <View style={styles.container}>
  <     Text style={styles.text}>Tela Demanda</Text>
      </View>
      )
  }
}

export default Demanda

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
