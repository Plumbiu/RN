import { View, Text, Animated, Button } from 'react-native'
import React, { useRef } from 'react'

export default function AnimatedDemo() {
  const fadeAdim = new Animated.Value(0)
  const fadeIn = () => {
    Animated.timing(fadeAdim, {
      toValue: 1,
      duration: 5000
    }).start()
  }
  const fadeOut = () => {
    Animated.timing(fadeAdim, {
      toValue: 0,
      duration: 5000
    }).start()
  }
  return (
    <View>
      <Animated.View
        style={[
          {
            opacity: fadeAdim
          }
        ]}
      >
        <Text>Animted View</Text>
      </Animated.View>
      <View>
        <Button title="Fade In" onPress={fadeIn} />
        <Button title="Fade Out" onPress={fadeOut} />
      </View>
    </View>
  )
}