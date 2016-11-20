/**
 * @providesModule Counter
 */

import React from 'react';
import {
  Text,
  View
} from 'react-native'

import styles from './components/theme'
import Button from './components/button'

import AnimateNumber from 'react-native-animate-number'

export default class Counter extends React.Component {
  state = {
    value: 1000
  }

  render() {
    return <View style={styles.container}>
      <AnimateNumber
        interval='10'
        timing='easeIn'
        value={this.state.value} 

        style={[styles.customFont, styles.header]}
        formatter={(val) => {
          return parseFloat(val).toFixed(2);
        }}
      />
      <View style={styles.groupButton}>
        <Button onPress={() => this.incrementValue()} theme='dark'>
          Increment
        </Button>
        <Button onPress={() => this.decrementValue()} theme='light'>
          Decrement
        </Button>
      </View>
      <Text style={[styles.customFont, styles.normal]}>Open up main.js to start working on your app!</Text>
    </View>
  }

  decrementValue() {
    this.setState({
      value: this.state.value - Math.floor(Math.random() * 200)
    })
  }

  incrementValue() {
    this.setState({
      value: this.state.value + Math.floor(Math.random() * 200)
    })
  }
}