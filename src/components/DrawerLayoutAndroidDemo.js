import {
  View,
  Text,
  DrawerLayoutAndroid,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native'
import React, { useState } from 'react'

export default function DrawerLayoutAndroidDemo() {
  const [drawerPosition, setDrawerPosition] = useState('left')
  return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      renderNavigationView={() => (
        <FlatList
          data={[
            { id: 1, name: 'xj', age: 20 },
            { id: 2, name: 'sx', age: 20 },
            { id: 3, name: 'yq', age: 21 },
          ]}
          renderItem={({ item }) => (
            <View style={{...styles.container, ...styles.drawerContainer}}>
              <Text>姓名：{item.name}</Text>
              <Text>年龄：{item.age}</Text>
            </View>
          )}
        />
      )}
      drawerPosition={drawerPosition}
    >
      <View style={styles.container}>
        <Text>The Drawer Position {drawerPosition}</Text>
        <Button
          title="change the drawer position"
          onPress={() =>
            setDrawerPosition(drawerPosition === 'left' ? 'right' : 'left')
          }
        />
      </View>
    </DrawerLayoutAndroid>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerContainer: {
    marginTop: 25
  }
})
