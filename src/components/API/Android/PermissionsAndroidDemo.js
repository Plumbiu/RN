import { View, Text, PermissionsAndroid, Alert, StyleSheet, Button } from 'react-native'
import React from 'react'

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: '该APP需要你的摄像头权限',
        message: '该APP需要您授权摄像头，为了给您更好地体验',
        buttonNeutral: '以后提醒我',
        buttonNegative: '取消',
        buttonPositive: '确认'
      }
    )
    if(granted === PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert('现在可以使用摄像头了')
    } else {
      Alert.alert('用户拒绝使用摄像头')
    }
  } catch(err) {
    Alert.alert(err)
  }
}


export default function PermissionsAndroidDemo() {
  return (
    <View style={styles.container}>
      <Text>PermissionsAndroidDemo</Text>
      <Button
        title="获取权限"
        onPress={requestCameraPermission}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
