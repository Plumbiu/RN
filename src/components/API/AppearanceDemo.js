import { View, Text, Appearance } from 'react-native'
import React from 'react'

export default function AppearanceDemo() {
  const colorScheme = Appearance.getColorScheme()
  return (
    <View>
      <Text>{colorScheme}</Text>
    </View>
  )
}