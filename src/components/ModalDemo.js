import React, { useState } from 'react'
import { Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const ModalDemo = () => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Hello</Text>
            <TouchableHighlight
              activeOpacity={0.85}
              underlayColor="#8755fe"
              onPress={() => setModalVisible(false)}
              style={styles.divBtn}
            >
              <Text style={styles.BasicText}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <TouchableHighlight
        activeOpacity={0.85}
        underlayColor="#8755fe"
        onPress={() => setModalVisible(true)}
        style={styles.divBtn}
      >
        <Text style={styles.BasicText}>Show Modal</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    padding: 40,
    backgroundColor: 'rgba(0, 0, 0, .1)',
    alignItems: 'center',
    borderRadius: 15
  },
  modalText: {
    fontSize: 50,
    color: '#333',
    marginBottom: 10
  },
  divBtn: {
    padding: 20,
    backgroundColor: '#4554fe',
    justifyContent: 'center',
    borderRadius: 15,
  },
  BasicText: {
    color: 'white',
    fontWeight: 'bold',
  },
})

export default ModalDemo
