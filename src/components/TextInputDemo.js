import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'

export default function TextInputDemo() {
  const [text, setText] = useState('')
  return (
    <TextInput
      value={text}
      onChangeText={text => setText(text)}
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    />
  )
}