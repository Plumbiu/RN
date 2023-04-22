import { View, Text, Switch, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function SwitchDemo() {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => {
    setIsEnabled(prevState => !prevState)
  }
  return (
    <View style={styles.container}>
      <Switch
        style={{ height: 50 }}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5ff4b' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}

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