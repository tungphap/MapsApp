import React from 'react'
import LoginScreen from './src/screens/LoginScreen'
import {
  View, Text, StyleSheet, 
  TextInput, TouchableOpacity, 
  Dimensions, Animated, Image} from 'react-native'

const {width, height} = Dimensions.get('window');
export default class App extends React.Component {
  render(){
    return(
      <LoginScreen />
    )
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  }
})