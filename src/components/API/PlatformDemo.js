import { View, Text, ScrollView, Platform } from 'react-native'
import React from 'react'

export default function PlatformDemo() {
  return (
    <ScrollView>
      <Text>OS</Text>
      <Text>{Platform.OS}</Text>
      <Text>{Platform.Version}</Text>
      <Text>isTv</Text>
      <Text>{Platform.isTV.toString()}</Text>
      {
        Platform.OS === 'ios' && (
          <>
            <Text>isPad</Text>
            <Text>{Platform.isPad.toString()}</Text>
          </>
        )
      }
      <Text>Contants</Text>
      <Text>
        {JSON.stringify(Platform.constants, null, 2)}
      </Text>
    </ScrollView>
  )
}