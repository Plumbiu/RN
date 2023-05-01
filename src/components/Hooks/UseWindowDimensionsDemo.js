import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'

export default function UseWindowDimensionsDemo() {

  const dimensions = useWindowDimensions()
  return (
    <View>
      <Text>
        {JSON.stringify(dimensions)}
      </Text>
    </View>
  )
}