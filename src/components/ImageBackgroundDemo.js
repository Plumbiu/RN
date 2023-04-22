import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

export default function ImageBackgroundDemo() {
  return (
    <View>
      <ImageBackground
        style={styles.avatar}
        source={{
          uri: 'https://plumbiu.github.io/blogImg/QQavatar.jpg'
        }}
      >
        <Text style={styles.textInsideAvatar}>ImageBackgroundDemo</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  avatar: {
    width: 200,
    height: 200
  },
  textInsideAvatar: {
    height: 50,
    padding: 20,
    color: 'white',
    margin: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  }
})