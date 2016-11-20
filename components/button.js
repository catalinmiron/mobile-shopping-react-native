/**
 * @providesModule Button
 */

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

import styles from './theme'

export default class Button extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const theme = this.props.theme === 'dark' ? [styles.dark, styles.darkText] : [styles.light, styles.lightText] 
    return <TouchableOpacity {...this.props} style={[styles.button, theme[0], {flex: 1}]}>
      <Text style={[styles.customFont, styles.buttonSize, theme[1]]}>
        {this.props.children}
      </Text>
    </TouchableOpacity>
  }
}