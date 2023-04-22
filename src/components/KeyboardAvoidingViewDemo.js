import { View, Text, KeyboardAvoidingView, Platform, TextInput, Button } from 'react-native'
import React from 'react'

export default function KeyboardAvoidingViewDemo() {
  return (
    <KeyboardAvoidingView
      behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
    >
      <View>
        <Text>Header</Text>
        <TextInput placeholder='username'></TextInput>
        <Button title='Submit' onPreSS={() => null} />
      </View>

    </KeyboardAvoidingView>
  )
}