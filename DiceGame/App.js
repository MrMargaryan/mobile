import React from 'react'
import { View, StyleSheet } from 'react-native'
import { NativeRouter, Switch, Route } from 'react-router-native'
import Home from './components/Home'
import GameBoard from './components/GameBoard'
import Result from './components/Result'

const App = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={GameBoard} />
          <Route path="/result" component={Result} />
        </Switch>
      </View>
    </NativeRouter>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: 'darkslateblue'
  }
})

export default App
