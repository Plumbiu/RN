import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from 'react-native'
import React, { useState } from 'react'

export default function RefreshControlDemo() {
  const [isRefresh, setIsRefresh] = useState(false)
  const handleRefresh = () => {
    setIsRefresh(true)
    setTimeout(() => {
      setIsRefresh(false)
    }, 2000)
  }
  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={handleRefresh} />}
      >
        <Text>Pull Down</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
