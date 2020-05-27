import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Emoji from 'react-native-emoji';

const Result = ({ history }) => {
  const win = history.location.state.win

  return (
    <View style={styles.result}>
      <Text style={styles.title}>{win ? 'Победа' : 'Поражение'}</Text>
      {
        win
          ? <Emoji name="trophy" style={{ fontSize: 80 }} />
          : <Emoji name="sob" style={{ fontSize: 80 }} />
      }

      <Button title="Играть заново" onPress={() => history.push('/game')} />
    </View>
  )
}

const styles = StyleSheet.create({
  result: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  title: {
    fontSize: 45,
    color: '#fff'
  }
})

export default Result
