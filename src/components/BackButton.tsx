import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const BackButton = ({ goBack }: { goBack: () => void }) => {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/arrow_back.png')}
      />
    </TouchableOpacity>
  )
}
export default BackButton

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 10 + getStatusBarHeight(),
        left: 4,
      },
      image: {
        width: 24,
        height: 24,
      },
})