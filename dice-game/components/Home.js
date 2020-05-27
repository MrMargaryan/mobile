import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Home = ({ history }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.rule}>Игрок и робот поочередно бросают 2 кубика</Text>
      <Text style={styles.rule}>Если выпадает дубль, кубики бросаются снова</Text>
      <Text style={styles.rule}>Цель игры - быстрее соперника набрать 100 очков</Text>
      <Text style={styles.rule}>Ничья может быть при одновременном броске кубиков, когда одновременно счет больше 100</Text>
      <Button title="Играть!" onPress={() => history.push('/game')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly'
  },
  rule: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default Home
