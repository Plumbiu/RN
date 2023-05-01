import { View, Text, ActionSheetIOS, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function ActionSheetIOSDemo() {
  const [result, setResult] = useState('🔮')
  const onPress = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['取消', '生成数字', '重置'],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark'
      },
      (buttonIndex) => {
        if(buttonIndex === 0) {
          // 取消后代码
        } else if(buttonIndex === 1) {
          setResult(String(Math.floor(Math.random() * 100) + 1))
        } else if(buttonIndex === 2) {
          setResult('🔮')
        }
      }
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <Button
        title='点我试试'
        onPress={onPress}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  result: {
    fontSize: 64,
    textAlign: 'center'
  }
})