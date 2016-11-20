import Exponent, {Font, Components} from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {
  NavigationProvider,
  StackNavigation,
  SharedElementOverlay
} from '@exponent/ex-navigation'

import AppRouter from './AppRouter';

import styles from './components/theme'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false
    }
  }

  async componentWillMount() {
    await Font.loadAsync({
      'SkyhookMono': require('./assets/fonts/SkyhookMono.ttf')
    })

    this.setState({
      fontLoaded: true
    })
  }

  render() {

    if (!this.state.fontLoaded) {
      return <Components.AppLoading />
    }

    return (
      <View style={[styles.container]}>
        <NavigationProvider router={AppRouter}>
          <SharedElementOverlay>
            <StackNavigation
              id="root"
              initialRoute={AppRouter.getRoute('productList')}
            />
          </SharedElementOverlay>
        </NavigationProvider>
      </View>
    );
  }
}

Exponent.registerRootComponent(App);
