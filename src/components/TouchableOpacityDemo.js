import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function TouchableOpacityDemo() {
  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.countText}>{count}</Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.btnText}>Press me</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  countText: {
    marginBottom: 20,
    fontSize: 50
  },
  btn: {
    padding: 10,
    backgroundColor: '#8944fe',
    borderRadius: 10
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
})