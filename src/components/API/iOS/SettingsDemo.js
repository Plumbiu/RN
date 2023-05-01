import { View, Text, Settings, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function SettingsDemo() {
  const [data, setData] = useState(Settings.get('data'))
  const storeData = data => {
    Settings.set(data)
    setData(Settings.get('data'))
  }
  return (
    <View style={styles.container}>
      <Text style={styles.result}>Stored value:</Text>
      <Text>{data}</Text>
      <Button
        title='Store "React"'
        onPress={() => storeData({ data: 'React' })}
      />
      <Button
        title='Store "Vue"'
        onPress={() => storeData({ data: 'Vue' })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  result: {
    fontSize: 64,
    textAlign: 'center',
  },
});
