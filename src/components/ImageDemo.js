import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function ImageDemo() {
  return (
    <View>
      <Image
        style={styles.avatar}
        source={{
          uri: 'https://plumbiu.github.io/blogImg/QQavatar.jpg'
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50
  }
})