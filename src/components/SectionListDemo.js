import { View, Text, SectionList, StyleSheet } from 'react-native'
import React from 'react'

export default function SectionListDemo() {
  const sectionList = [
    { id: '1', title: 'one', data: ['1', '一'] },
    { id: '2', title: 'two', data: ['2', '二'] },
    { id: '3', title: 'three', data: ['3', '三'] },
    { id: '4', title: 'four', data: ['4', '四'] }
  ]
  return (
    <SectionList
      sections={sectionList}
      renderItem={({ item }) => (
        <Text>{item}</Text>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.blodText}>{section.title}</Text>
      )}
      // keyExtractor={(item) => item}
    />
  )
}

const styles = StyleSheet.create({
  blodText: {
    fontWeight: 'bold'
  }
})