import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'

export default function TouchableHighlightDemo() {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor='#dddddd'
      onPress={() => alert('Pressed!')}
    >
      <View>
        <Text>Touch Me</Text>
      </View>
    </TouchableHighlight>
  )
}
