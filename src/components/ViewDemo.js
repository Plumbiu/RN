import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ViewDemo() {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.blueView} />
      <View style={styles.redView} />
      <Text>
        Hello World!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    width: 100,
  },
  blueView: {
    backgroundColor: 'blue',
    width: 50
  },
  redView: {
    backgroundColor: 'red',
    width: 30
  }
})