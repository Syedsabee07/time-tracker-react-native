import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'

import colors from '../styles/colors'

const styles = StyleSheet.create({
  defaultContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  defaultButton: {
    alignItems: 'center',
    padding: 10
  }
})

const CustomButton = (props) => {
  return (
    <View style={[ styles.defaultContainer, props.containerStyle]} >
      <TouchableOpacity style={[styles.defaultButton, props.buttonStyle ]} onPress={props.onPress}>
        {props.children}
      </TouchableOpacity>
    </View>
  )
}

export default CustomButton
