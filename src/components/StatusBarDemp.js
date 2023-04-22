import { View, Text, StatusBar, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function StatusBarDemp() {
  const sytleTypes = ['default', 'dark-content', 'light-content']
  const [visibleStatusBar, setVisibleStatusBar] = useState(false)
  const [styleStatusBar, setStyleStatusBar] = useState(sytleTypes[0])
  const themeHandler = () => {
    const typeID = sytleTypes.indexOf(styleStatusBar) + 1
    if(typeID === sytleTypes.length)
      setStyleStatusBar(sytleTypes[0])
    else
      setStyleStatusBar(sytleTypes[typeID])
  }
  return (
    <View style={styles.container}>
      <Text>
        <StatusBar
          hidden={visibleStatusBar}
        />
        <StatusBar
          backgroundColor="blue"
          barStyle={styleStatusBar}
        />
        <View>
          <Button
            title={ visibleStatusBar ? 'show statusbar' : 'hide statusbar' }
            onPress={() => setVisibleStatusBar(!visibleStatusBar)}
          />
          <Button
            title='change theme'
            onPress={themeHandler}
          />
          
        </View>
      </Text>
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