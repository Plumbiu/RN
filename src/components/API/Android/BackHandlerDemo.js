import { View, Text, Alert, BackHandler } from 'react-native'
import React, { useEffect } from 'react'

export default function BackHandlerDemo() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel'
        },
        {
          text: 'YES',
          onPress: () => BackHandler.exitApp()
        }
      ])
      return true
    }
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)
    return () => {
      backHandler.remove()
    }
    
  }, [])
  return (
    <View>
      <Text>尝试点击返回键或屏幕两侧滑动</Text>
    </View>
  )
}