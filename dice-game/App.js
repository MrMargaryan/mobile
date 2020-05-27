import React from 'react'
import { NativeRouter as Router, Route, Switch } from 'react-router-native'
import { View, StyleSheet } from 'react-native'
import Home from './components/Home'
import Game from './components/Game'
import Result from './components/Result'

const App = () => {
  return (
    <Router>
      <View style={styles.container}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/result" component={Result} />
        </Switch>
      </View>
    </Router>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'darkslateblue'
  }
})

export default App
