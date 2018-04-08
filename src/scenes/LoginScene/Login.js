import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'

import Reactotron from 'reactotron-react-native'

const styles = StyleSheet.create({
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
})

const Login = () => {
  return (
    <View>
      <Text style={styles.welcome}>
        Login
      </Text>
      <View>
        <Button onPress={() => Actions.home()} title="Home" />
      </View>
    </View>
  )
}

export default Login
