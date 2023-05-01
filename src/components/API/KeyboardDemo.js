import { View, Text, Keyboard, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function KeyboardDemo() {
  const [keyboardStatus, setKeyboardStatus] = useState('')
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('Keyboard Shown!')
    })
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('Keyboard Hidden!')
    })
    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [])

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Click here ~~'
        onSubmitEditing={Keyboard.dismiss}
      />
      <Text>{keyboardStatus}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})