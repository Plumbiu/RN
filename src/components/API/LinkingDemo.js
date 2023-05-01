import { View, Linking, Alert, Button, StyleSheet } from 'react-native'
import React, { useCallback } from 'react'

const OpenURLButton = (({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url)
    if (supported) {
      await Linking.openURL(url)
    } else {
      Alert.alert(`此链接 ${url} 不支持!`)
    }
  }, [url])
  return <Button title={children} onPress={handlePress} />
})

export default function LinkingDemo() {
  return (
    <View style={styles.container}>
      <OpenURLButton url={'https://blog.plumbiu.club'}>打开支持的链接</OpenURLButton>
      <OpenURLButton url={'slack://open?team=123456"'}>打开不支持的链接</OpenURLButton>
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