import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'

const Game = ({ history }) => {
  const [userDice, setUserDice] = useState({ diceOne: '?', diceTwo: '?' })
  const [botDice, setBotDice] = useState({ diceOne: '?', diceTwo: '?' })
  const [userPoints, setUserPoints] = useState(0)
  const [botPoints, setBotPoints] = useState(0)

  const getRandomDiceNumber = () => {
    return Math.floor(Math.random() * 6) + 1
  }

  const rollTheDice = () => {
    setUserDice({
      diceOne: getRandomDiceNumber(),
      diceTwo: getRandomDiceNumber()
    })

    setTimeout(() => {
      setBotDice({
        diceOne: getRandomDiceNumber(),
        diceTwo: getRandomDiceNumber()
      })
    }, 1200)
  }

  useEffect(() => {
    userDice.diceOne === userDice.diceTwo && userDice.diceOne !== '?' &&
      setTimeout(() => {
        setUserDice({
          ...userDice,
          diceOne: getRandomDiceNumber(),
          diceTwo: getRandomDiceNumber()
        })
      }, 500)

    userDice.diceOne !== userDice.diceTwo &&
      setUserPoints(userPoints + userDice.diceOne + userDice.diceTwo)
  }, [userDice])

  useEffect(() => {
    botDice.diceOne === botDice.diceTwo && botDice.diceOne !== '?' &&
      setTimeout(() => {
        setBotDice({
          ...botDice,
          diceOne: getRandomDiceNumber(),
          diceTwo: getRandomDiceNumber()
        })
      }, 500)

    botDice.diceOne !== botDice.diceTwo &&
      setBotPoints(botPoints + botDice.diceOne + botDice.diceTwo)
  }, [botDice])

  useEffect(() => {
    setTimeout(() => {
      if (userPoints >= 100 && botPoints >= 100) {
        history.push('/result', { result: 'draw' })
      } else {
        if (userPoints >= 100)
          history.push('/result', { result: 'win' })

        if (botPoints >= 100)
          history.push('/result', { result: 'loss' })
      }
    }, 1200)
  }, [botPoints])

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.user}>Вы: {userPoints}</Text>
        <View style={styles.userDices}>
          <View style={styles.dice}>
            <Text style={styles.number}>{userDice.diceOne}</Text>
          </View>
          <View style={{ ...styles.dice, marginLeft: 100 }}>
            <Text style={styles.number}>{userDice.diceTwo}</Text>
          </View>
        </View>
        <View style={styles.botDices}>
          <View style={styles.dice}>
            <Text style={styles.number}>{botDice.diceOne}</Text>
          </View>
          <View style={{ ...styles.dice, marginLeft: 100 }}>
            <Text style={styles.number}>{botDice.diceTwo}</Text>
          </View>
        </View>
        <Text style={styles.bot}>Бот: {botPoints}</Text>
        <Button style={styles.button} title="Бросить кубики" onPress={rollTheDice} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  user: {
    color: '#ffffff',
    fontSize: 50,
    marginTop: 30,
    alignSelf: 'center'
  },
  userDices: {
    flexDirection: 'row',
    marginTop: 50,
    alignSelf: 'center'
  },
  bot: {
    color: '#ffffff',
    fontSize: 50,
    marginTop: 50,
    marginBottom: 50,
    alignSelf: 'center'
  },
  botDices: {
    flexDirection: 'row',
    marginTop: 50,
    alignSelf: 'center'
  },
  dice: {
    width: 100,
    height: 100,
    backgroundColor: '#ffffff'
  },
  number: {
    fontSize: 70,
    color: 'darkslateblue',
    alignSelf: 'center'
  }
});

export default Game
