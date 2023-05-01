import { View, Text, useColorScheme } from 'react-native'
import React from 'react'

export default function UseColorSchemeDemo() {
  const colorScheme = useColorScheme()
  return (
    <View>
      <Text>{colorScheme}</Text>
    </View>
  )
}