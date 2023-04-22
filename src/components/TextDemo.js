import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function TextDemo() {
  return (
    <View>
      <Text style={styles.baseText}>
        基本文字
        <Text style={styles.innerText}>红色文字</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'red'
  }
})