import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

class TabPrestador extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Prestador'
  })

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}></Text>
      </View>
      )
  }
}

export default TabPrestador

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
