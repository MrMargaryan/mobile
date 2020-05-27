import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Emoji from 'react-native-emoji'

const Result = ({ history }) => {
  const result = history.location.state.result

  const renderResult = () => {
    switch (result) {
      case 'win':
        return (
          <View style={styles.result}>
            <Text style={styles.title}>Победа</Text>
            <Emoji name="trophy" style={{ fontSize: 80 }} />
          </View>
        )
      case 'loss':
        return (
          <View style={styles.result}>
            <Text style={styles.title}>Поражение</Text>
            <Emoji name="sob" style={{ fontSize: 80 }} />
          </View>
        )
      case 'draw':
        return (
          <View style={styles.result}>
            <Text style={styles.title}>Ничья</Text>
            <Emoji name="handshake" style={{ fontSize: 80 }} />
          </View>
        )
    }
  }

  return (
    <View style={styles.container}>
      {renderResult()}
      <Button title="Играть заново" onPress={() => history.push('/game')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  result: {
    alignItems: 'center'
  },
  title: {
    fontSize: 45,
    color: '#fff',
    marginBottom: 50
  }
})

export default Result
