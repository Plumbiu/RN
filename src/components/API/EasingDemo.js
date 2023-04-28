import { View, Text, StyleSheet, Easing, SectionList, Animated } from 'react-native'
import React from 'react'

const SECTIONS = [
  {
    title: 'Predefined animations',
    data: [
      { title: 'Bounce', easing: Easing.bounce },
      { title: 'Ease', easing: Easing.ease },
      { title: 'Elastic', easing: Easing.elastic(4) },
    ],
  },
  {
    title: 'Standard functions',
    data: [
      { title: 'Linear', easing: Easing.linear },
      { title: 'Quad', easing: Easing.quad },
      { title: 'Cubic', easing: Easing.cubic },
    ],
  },
  {
    title: 'Additional functions',
    data: [
      {
        title: 'Bezier',
        easing: Easing.bezier(0, 2, 1, -1),
      },
      { title: 'Circle', easing: Easing.circle },
      { title: 'Sin', easing: Easing.sin },
      { title: 'Exp', easing: Easing.exp },
    ],
  },
  {
    title: 'Combinations',
    data: [
      {
        title: 'In + Bounce',
        easing: Easing.in(Easing.bounce),
      },
      {
        title: 'Out + Exp',
        easing: Easing.out(Easing.exp),
      },
      {
        title: 'InOut + Elastic',
        easing: Easing.inOut(Easing.elastic(1)),
      },
    ],
  },
]

export default function EasingDemo() {
  const opacity = new Animated.Value(0)
  const size = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 80]
  })
  const animatedStyles = [
    styles.animBox,
    {
      opacity,
      width: size,
      height: size
    }
  ]
  const animate = easing => {
    opacity.setValue(0)
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1200,
      easing,
      useNativeDriver: true
    }).start()
  }

  return (
    <View style={styles.container}>
      <View style={styles.animContainer}>
        <Text style={styles.animTitle}>点击不同标题查看动画效果</Text>
        <Animated.View
          style={animatedStyles}
        />
      </View>
      <SectionList
        style={[styles.centerText]}
        sections={SECTIONS}
        renderItem={({ item }) => (
          <Text
            onPress={() => animate(item.easing)}
            style={styles.content}
          >
            {item.title}
          </Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text
            style={styles.title}
          >
            {section.title}
          </Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  animContainer: {
    padding: 0,
    width: 200
  },
  animTitle: {
    color: 'purple'
  },
  animBox: {
    marginVertical: 15,
    marginHorizontal: 'auto',
    padding: 20,
    backgroundColor: '#333',
    textAlign: 'center'
  },
  centerText: {
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: '#666',
    color: 'white',
  },
  content: {
    padding: 4,
  },
})
