import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Home = ({ history }) => {
  return (
    <View style={styles.rules}>
      <Text style={styles.rule}>Игрок и робот поочередно бросают 2 кубика</Text>
      <Text style={styles.rule}>Если выпадает дубль, кубики бросаются снова</Text>
      <Text style={styles.rule}>Цель игры - быстрее соперника набрать 100 очков.</Text>
      <Button style={styles.playBtn} title="Играть" onPress={() => history.push('/game')} />
    </View>
  )
}

const styles = StyleSheet.create({
  rules: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  rule: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default Home
