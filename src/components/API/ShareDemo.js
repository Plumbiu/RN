import { View, Text, Share, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function ShareDemo() {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'React Native | A framework for building native apps using React'
      })
      if(result.action === Share.sharedAction) {
        if(result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if(result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch(err) {
      alert(err.message)
    }
  }
  return (
    <View style={styles.container}>
      <Button
        onPress={onShare}
        title='share'
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