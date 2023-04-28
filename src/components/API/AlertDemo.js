import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { Alert } from 'react-native'

export default function AlertDemo() {
  function createBtnAlert() {
    Alert.alert(
      'Alert 标题',
      'Alert 内容',
      [
        {
          text: ''
        },
        {
          text: 'cancel',
          onPress: () => console.log('cancel!'),
          style: 'cancel'
        },
        { text: 'ok', onPress: () => console.log('ok!!') }
      ]
    )
  }
  return (
    <View style={styles.container}>
      <Button
        title='Press me'
        onPress={createBtnAlert}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
