import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { AppState } from 'react-native'

export default function AppStateDemo() {
  const appState = useRef(AppState.currentState)
  const [appStateVisible, setAppStateVisible] = useState(appState.current)
  const [words, setWords] = useState('first state')
  useEffect(() => {
    const subsciption = AppState.addEventListener('change', (nextAppState) => {
      if(appState.current.match(/inactive|background/) && nextAppState === 'active') {
        setWords('App has come to the foreground!')
      }
      appState.current = nextAppState
      setAppStateVisible(appState.current)
      console.log('AppState', appState.current)
    })
    return () => {
      subsciption.remove()
    }
  }, [])
  return (
    <View>
      <Text>{words}</Text>
      <Text>Current state is: {appStateVisible}</Text>
    </View>
  )
}