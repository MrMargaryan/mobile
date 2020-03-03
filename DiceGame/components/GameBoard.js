import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const GameBoard = ({ history }) => {
  const [userDice, setUserDice] = useState({ diceOne: '?', diceTwo: '?' })
  const [botDice, setBotDice] = useState({ diceOne: '?', diceTwo: '?' })
  const [userPoints, setUserPoints] = useState(0)
  const [botPoints, setBotPoints] = useState(0)

  const getRandomDiceNumber = () => {
    return Math.floor(Math.random() * 6) + 1
  }

  const rollTheDice = () => {
    setUserDice({
      ...userDice,
      diceOne: getRandomDiceNumber(),
      diceTwo: getRandomDiceNumber()
    })

    setTimeout(() => {
      setBotDice({
        ...botDice,
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
      userPoints >= 100 && history.push('/result', { win: true })
    }, 500)
  }, [userPoints])

  useEffect(() => {
    setTimeout(() => {
      botPoints >= 100 && history.push('/result', { result: false })
    }, 500)
  }, [botPoints])

  return (
    <View style={styles.board}>
      <View>
        <Text style={styles.title}>Игрок</Text>
        <View style={styles.dices}>
          <View style={styles.dice}>
            <Text style={styles.number}>
              {userDice.diceOne}
            </Text>
          </View>
          <View style={styles.dice}>
            <Text style={styles.number}>
              {userDice.diceTwo}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Бот</Text>
        <View style={styles.dices}>
          <View style={styles.dice}>
            <Text style={styles.number}>
              {botDice.diceOne}
            </Text>
          </View>
          <View style={styles.dice}>
            <Text style={styles.number}>
              {botDice.diceTwo}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Очки</Text>
        <View style={styles.results}>
          <Text style={styles.result}>Игрок: {userPoints}</Text>
          <Text style={styles.result}>Бот: {botPoints}</Text>
        </View>
      </View>
      <Button title="Бросить кубики" onPress={rollTheDice} />
    </View>
  )
}

const styles = StyleSheet.create({
  board: {
    flex: 1,
    justifyContent: 'space-around'
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },
  dices: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 30
  },
  dice: {
    marginTop: 10,
    marginRight: 30,
    width: 50,
    height: 100,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  number: {
    fontSize: 50,
    color: 'darkslateblue'
  },
  result: {
    color: '#fff',
    fontSize: 25,
    paddingTop: 10
  }
})

export default GameBoard
