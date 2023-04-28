import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Pressable } from 'react-native'

export default function PressableDemo() {
  const [counter, setCounter] = useState(0)
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(counter + 2)}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgba(120, 20, 240, 1)' : 'rgba(120, 20, 240, 0.5)',
            borderRadius: 25
          }
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.textBtn}>{pressed ? 'Pressed!' : 'Press Me!'}</Text>
        )}
      </Pressable>
      <View style={styles.textContent}>
        <Text>{counter ? `${ counter === 1 ? 'onPress' : `${counter}x onPress` }` : ''}</Text>
      </View>
    </View>
  )
}
const textBasicStyle = {
  width: '100vw',
  textAlign: 'center',
  padding: 15,
  fontSize: 25,
  color: '#fff'
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    ...textBasicStyle
  },
  textContent: {
    ...textBasicStyle,
    backgroundColor: 'rgba(200, 200, 200, .35)',
    marginTop: 25,
    fontSize: 20
  }
})