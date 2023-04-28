import { View, Text, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'

const windowDimensions = Dimensions.get('window')
const screenDimensions = Dimensions.get('screen')

export default function DimensionsDemo() {
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions
  })
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
      setDimensions({ window, screen })
    })
    return () => {
      subscription?.remove()
    }
  }, [])
  return (
    <View>
      <Text>Window Dimensions</Text>
      {
        Object.entries(dimensions.window).map(([key, value]) => (
          <Text key={key}>{key} - {value}</Text>
        ))
      }
      <Text>
        {
          Object.entries(dimensions.screen).map(([key, value]) => (
            <Text key={key}>{key} - {value}</Text>
          ))
        }
      </Text>
    </View>
  )
}