import React from 'react'
import { View, Text, Button, StyleSheet, Dimensions, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'

import colors from '../../styles/colors'
import images from '../../assets/images/images'
import CustomButton from '../../components/CustomButton'

import Reactotron from 'reactotron-react-native'

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    height,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    marginBottom: 5,
  },
  description: {
    fontSize: 25,
    textAlign: 'center',
    margin: 20,
    marginBottom: 50,
  },
  topButtonContainer: {
    width: width - 75,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  bottomButtonContainer: {
    marginTop: 25,
    height: 50,
    width: width - 75,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  topButtonStyle: {

  }
})

const Home = () => {
  const imageWidth = width - 275
  return (
    <View style={styles.container} >
      <Image style={{ width: imageWidth, height: imageWidth, marginBottom: 25 }} source={images.icon} />
      <Text style={styles.welcome}>
        Time Tracker
      </Text>
      <Text style={styles.description}>
        The free to use, open-source Time Tracker that tracks your time across all your devices
      </Text>
      <View style={styles.topButtonContainer} >
        <CustomButton containerStyle={{ backgroundColor: colors.gray, marginRight: 15, borderRadius: 5 }} onPress={() => Actions.loginScene()} >
          <Text style={{ color: 'white' }} >
            Signup
          </Text>
        </CustomButton>
        <CustomButton containerStyle={{ backgroundColor: colors.primary, marginLeft: 15, borderRadius: 5 }} onPress={() => Actions.loginScene()} >
          <Text style={{ color: 'white' }} >
            Login
          </Text>
        </CustomButton>
      </View>
      <View style={styles.bottomButtonContainer} >
        <CustomButton containerStyle={{ backgroundColor: colors.error, borderRadius: 5, }} onPress={() => Actions.loginScene()} >
          <Text style={{ color: 'white' }} >
            Continue offline
          </Text>
        </CustomButton>
      </View>
    </View>
  )
}

export default Home
